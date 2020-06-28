import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import bannerImg from '../assets/banner_img.png'
import bannerBack from '../assets/bannerBack.png'
import aboutCenterImg from '../assets/aboutCenterImg.png'
import aboutLeftImg from '../assets/aboutLeftImg.png'
import { Typography, Input, Button, Modal } from 'antd'
import HomeContainer from '../components/HomeContainer'
import { Link } from 'react-router-dom'

function HomePage() {
    const { Title, Paragraph } = Typography;
    const [modalVisibility, setModalVisibility] = useState<boolean>(false);
    const onClickSend = () => {
        setModalVisibility(true);
    }
    const onClickModalClose = () => {
        setModalVisibility(false)
    }
    return (
        <>
            <HeaderContainer>
                <Header>
                    <Logo src={logo} />
                    <Menu>
                        <MenuList><MenuListHyper href="https://github.com/chiol"> git</MenuListHyper></MenuList>
                        <MenuList><MenuListLink to="/CYBLOG/blog">blog</MenuListLink></MenuList>
                    </Menu>
                </Header>
            </HeaderContainer>
            <BodyContainer>
                <Body>
                    <BannerContainer src={bannerBack}>
                        <Banner>
                            <BannerLeft>
                                <BannerLeftTextHeader>NOW OR NEVER</BannerLeftTextHeader>
                                <BannerTextBody>MAKE A NEW, INDUSTRY 4.0<br /> WE HAVE TO CREATIVE THINK</BannerTextBody>
                            </BannerLeft>
                            <BannerCenter>
                                <BannerImg src={bannerImg} />
                            </BannerCenter>
                            <BannerRight>
                                <BannerRightTextHeader>I'M CODER</BannerRightTextHeader>
                                <BannerTextBody>#CODING #PROGRAMMING #BLOCKCHAIN #REACT #SPRING FRAMEWORK</BannerTextBody>
                            </BannerRight>
                        </Banner>
                    </BannerContainer>
                    <HomeContainer title={"ABOUT ME"}>
                        <AboutBox>
                            <AbountImg src={aboutLeftImg} alt={"바보"} />
                        </AboutBox>
                        <AboutBox>
                            <AbountImg src={aboutCenterImg} alt={"바보"} />
                        </AboutBox>
                        <AboutBox>
                            <Typography>
                                <Title level={3}>CONTENTS</Title>
                                <Paragraph>asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfas</Paragraph>
                            </Typography>
                        </AboutBox>
                    </HomeContainer>
                    <HomeContainer title={"MY SKILL & SERVICE"}>
                        <SkillBoxLeft>
                            <ul>
                                <li>JAVA</li>
                                <li>JAVASCRIPT {"&"} TYPESCRIPT </li>
                                <li>C {"&"} C++</li>
                                <li>PYTHON</li>
                            </ul>
                        </SkillBoxLeft>
                        <SkillBoxCenter>
                            <ul>
                                <li>Front-END
                                    <ul>
                                        <li>REACT</li>
                                        <li>REACT-NATIVE</li>
                                    </ul>
                                </li>
                                <li>Back-END
                                    <ul>
                                        <li>SPRING-FRAMEWORK</li>
                                        <li>NODEJS</li>
                                    </ul>
                                </li>
                                <li>BLOCKCHAIN
                                    <ul>
                                        <li>STEEM</li>
                                        <li>EOSIO</li>
                                    </ul>
                                </li>
                            </ul>
                        </SkillBoxCenter>
                        <SkillBoxRight>
                            <ul>
                                <li>BTS 음반 공동구매 확인</li>
                                <li>등등</li>
                            </ul>
                        </SkillBoxRight>
                    </HomeContainer>
                    <HomeContainer title="CONTEXT ME">
                        <ContectBox>
                            <ContectLeftBox>
                                <ContectInput placeholder="name" />
                                <ContectInput placeholder="subject" />
                                <ContectTextArea rows={10} placeholder="contents" />
                                <ContectSendButton type="primary" onClick={onClickSend} >Send</ContectSendButton>
                            </ContectLeftBox>
                            <ContectRightBox>
                                <ContectInfoBox>
                                    name <br /> 정치영
                                </ContectInfoBox>
                                <ContectInfoBox>
                                    mobile<br />010-6850-6952
                                </ContectInfoBox>
                                <ContectInfoBox>
                                    email <br />jcy6677@gmail.com
                                </ContectInfoBox>
                                <ContectInfoBox>
                                    sns <br />@instagram - chi___0
                                </ContectInfoBox>
                            </ContectRightBox>
                        </ContectBox>
                    </HomeContainer>
                    <Footer>
                        www.CYBLOG.com
                </Footer>
                </Body>
            </BodyContainer>
            <Modal
                title="준비중"
                visible={modalVisibility}
                footer={[
                    <Button key="back" onClick={onClickModalClose}>
                      Return
                    </Button>,
                  ]}
                >
                <p>준비중...</p>
                </Modal>
        </>

    )
}
const HeaderContainer = styled.div`
    width: 100%;
    height: 72px;
    background-color:lightgray;
`;
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1024px;
    margin: auto;
    height: 100%;
    align-items: center;
`;
const Logo = styled.img`
    margin-left:30px;
`
const Menu = styled.ul`
    margin-right:30px;
`;
const MenuList = styled.li`
    display:inline;
    margin:10px;
`
const MenuListHyper = styled.a`
    text-decoration: none;
    color: black;
    &:hover{
        color: #545454;
    }
`
const MenuListLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:hover{
        color: #545454;
    }
`
const BodyContainer = styled.div`
    width:1024px;
    margin:auto;
`
const Body = styled.div`
    display:flex;
    flex-direction: column;
    background-color:#f8f9fa;
    width: 100%;
`
const BannerContainer = styled.div<{ src: string }>`
    display:flex;
    justify-content:center;
    width:100%;
    height: 670px;
    background-image: url(${props => props.src});
    background-repeat : no-repeat;
    background-size : cover;
    background-position: center;
`
const Banner = styled.div`
    display:flex;
    height: 568px;
    flex-direction:row;
`
const BannerLeft = styled.div`
    width: 273px;
    display:flex;
    flex-direction:column;
`;
const BannerRight = styled.div`
    width: 273px;
    display: flex;
    padding-left:10px;
    flex-direction:column-reverse;

`;
const BannerCenter = styled.div`
    width:273px;
    displaY: flex;
    flex-direction: column;
    justify-content: center;
`
const BannerImg = styled.img`
    max-width:100%;
`
const BannerLeftTextHeader = styled.div`
    font-size:x-large;
    margin-top:100px;
    font-weight: bold;
`
const BannerRightTextHeader = styled.div`
    font-size:x-large;
    margin-bottom: 100px;
    font-weight: bold;
`
const BannerTextBody = styled.div`
    font-size:large;
    margin-top: 10px;
    margin-bottom: 10px;
`
const AboutBox = styled.div`
    width: 288px;
    word-break:break-all;
    display:flex;
    flex-direction:column;
    justify-content: center;
    margin: 15px;
`
const AbountImg = styled.img`
    width: 100%;
    height: 350px;
`
const SkillBox = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const SkillBoxLeft = styled(SkillBox)`
    width: 33.3%;
    background-color: #d6d6d6;
`;
const SkillBoxCenter = styled(SkillBox)`
    width: 33.3%;
    background-color: #959595;
`;
const SkillBoxRight = styled(SkillBox)`
    width: 33.3%;
    background-color: #545454;
`;
const ContectBox = styled.div`
    width: 840px;
    height: 422px;
    box-shadow: inset 2px 2.2px 21px 0 rgba(0,0,0,0.22);
    display:flex;
    flex-direction: row;
`
const ContectTempBox = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ContectInput = styled(Input)`
    width: 80%;
    margin-top: 20px;
`
const ContectTextArea = styled(Input.TextArea)`
    width: 80%;
    margin-top: 20px;
`
const ContectSendButton = styled(Button)`
    width: 80%;
    margin-top:20px;
    height: 30px;
`
const ContectLeftBox = styled(ContectTempBox)`
`
const ContectRightBox = styled(ContectTempBox)`
    justify-content: center;
`
const ContectInfoBox = styled.div`
    border-top: 2px solid #d6d6d6;
    width:80%;
    margin-top:15px;
    padding-top:10px;
`
const Footer = styled.div`
    background-color: #868686;
    display:flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-family: MyriadPro;
    width: 100%;
    height: 100px;
`
export default HomePage
