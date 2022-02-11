import React from 'react';
import { aboutList, guideList } from '../../constants/footerLists';
import { currency, language, location } from '../../constants/localeSetting';
import {
  About,
  AboutFootButton,
  AboutFootTitle,
  AboutLink,
  AboutList,
  AboutListContent,
  ContentParagraph,
  ContentTitle,
  DownloadButton,
  FooterBox,
  FooterContainer,
  FooterWrap,
  Guides,
  GuidesBox,
  GuidesBoxContents,
  GuidesBoxTitle,
  GuidesWrapper,
  HelpBox,
  IconsBox,
  Input,
  LocaleInfo,
  Policies,
  PolicyList,
  Subscribe,
  SubscribeButton,
  SubscribeFooter,
  SubscribeFooterInfo,
  SubscribeForm,
  SubscribeTitle,
} from './Footer.style';

function Footer() {
  return (
    <FooterContainer>
      <About>
        <h1>What is Etsy?</h1>
        <AboutLink>Read our wonderfully weird story</AboutLink>
        <AboutList>
          {aboutList.map(
            (el: { title: string; contents: string; extra?: string }) => (
              <AboutListContent key={el.title}>
                <ContentTitle>{el.title}</ContentTitle>
                <ContentParagraph>
                  {el.contents}
                  {el.extra && <span> {el.extra}</span>}
                </ContentParagraph>
              </AboutListContent>
            )
          )}
        </AboutList>
        <AboutFootTitle>
          Have a question? Well, we’ve got some answers.
        </AboutFootTitle>
        <AboutFootButton>Go to Help Center</AboutFootButton>
      </About>
      <Subscribe>
        <SubscribeTitle>
          Yes! Send me exclusive offers, unique gift ideas, and personalized
          tips for shopping and selling on Etsy.
        </SubscribeTitle>
        <SubscribeForm>
          <Input type="email" placeholder="Enter your email" />
          <SubscribeButton>Subscribe</SubscribeButton>
        </SubscribeForm>
        <SubscribeFooter>
          <SubscribeFooterInfo>
            Etsy is powered by 100% renewable electricity.
          </SubscribeFooterInfo>
        </SubscribeFooter>
      </Subscribe>
      <Guides>
        <GuidesWrapper>
          {guideList.map(
            (
              el: {
                title: string;
                list: string[];
              },
              index: number
            ) => (
              <GuidesBox key={el.title}>
                <GuidesBoxTitle>{el.title}</GuidesBoxTitle>
                <GuidesBoxContents>
                  {el.list.map((li: string) => (
                    <li key={li}>{li}</li>
                  ))}
                </GuidesBoxContents>
                {index === guideList.length - 1 && (
                  <HelpBox>
                    <DownloadButton>Download the Etsy App</DownloadButton>
                    <IconsBox>icons</IconsBox>
                  </HelpBox>
                )}
              </GuidesBox>
            )
          )}
        </GuidesWrapper>
      </Guides>
      <FooterWrap>
        <FooterBox>
          <LocaleInfo>
            {location} | {language} | $ ({currency})
          </LocaleInfo>
          <Policies>
            <span>2022 Etsy, Inc.</span>
            <PolicyList>
              {Array.from(
                ['Terms of use', 'Privacy', 'Interest-based ads'],
                li => (
                  <li>{li}</li>
                )
              )}
            </PolicyList>
          </Policies>
        </FooterBox>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
