import React from 'react';
import {
  aboutList,
  guideList,
  aboutDescriptions,
} from '../../constants/footerLists';
import { currency, language, location } from '../../constants/localeSetting';
import BeigeLine from '../../icons/BeigeLine';
import BlueLine from '../../icons/BlueLine';
import DarkBlueLine from '../../icons/DarkBlueLine';
import Eco from '../../icons/Eco';
import ToolTipTemplate from '../ToolTipTemplate';
import * as S from './Footer.style';

function Footer() {
  return (
    <S.FooterContainer>
      <S.SVGWrapper top={0} left={0}>
        <BeigeLine width={1400} height={48} color="#fff" />
      </S.SVGWrapper>
      <S.AboutWrapper>
        <S.About>
          <S.AboutTitle>What is Etsy?</S.AboutTitle>
          <S.AboutLink>Read our wonderfully weird story</S.AboutLink>
          <S.AboutList>
            {aboutList.map(({ title, contents, extra }) => (
              <S.AboutListContent key={title}>
                <S.ContentTitle>{title}</S.ContentTitle>
                <S.ContentParagraph>
                  {contents}
                  {extra && (
                    <>
                      <S.ContentMoreSpan> {extra}</S.ContentMoreSpan>
                      <ToolTipTemplate
                        bgColor="#fff"
                        color="#000"
                        element={
                          <S.ToolTipUl>
                            {aboutDescriptions.map(li => (
                              <S.ToolTipLi key={li}>{li}</S.ToolTipLi>
                            ))}
                          </S.ToolTipUl>
                        }
                      />
                    </>
                  )}
                </S.ContentParagraph>
              </S.AboutListContent>
            ))}
          </S.AboutList>
          <S.AboutFootTitle>
            Have a question? Well, we’ve got some answers.
          </S.AboutFootTitle>
          <S.AboutFootButton>Go to Help Center</S.AboutFootButton>
        </S.About>
      </S.AboutWrapper>
      <S.Subscribe>
        <S.SVGWrapper top={-30} left={0}>
          <BlueLine width={1400} height={30} color="#d7e6f5" />
        </S.SVGWrapper>
        <S.SubscribeTitle>
          Yes! Send me exclusive offers, unique gift ideas, and personalized
          tips for shopping and selling on Etsy.
        </S.SubscribeTitle>
        <S.SubscribeForm>
          <S.Input type="email" placeholder="Enter your email" />
          <S.SubscribeButton>Subscribe</S.SubscribeButton>
        </S.SubscribeForm>
        <S.SubscribeFooter>
          <S.SVGWrapper>
            <DarkBlueLine width={1400} height={48} color="#d7e6f5" />
          </S.SVGWrapper>
          <S.SubscribeFooterInfo>
            <Eco width={36} height={36} color="#fff" />
            <S.SubscribeFooterSpan>
              Etsy is powered by 100% renewable electricity.
            </S.SubscribeFooterSpan>
          </S.SubscribeFooterInfo>
        </S.SubscribeFooter>
      </S.Subscribe>
      <S.Guides>
        <S.GuidesWrapper>
          {guideList.map(({ title, list }, index) => (
            <S.GuidesBox key={title}>
              <S.GuidesBoxTitle>{title}</S.GuidesBoxTitle>
              <S.GuidesBoxContents>
                {list.map(li => (
                  <S.Guide key={li}>{li}</S.Guide>
                ))}
              </S.GuidesBoxContents>
              {index === guideList.length - 1 && (
                <S.HelpBox>
                  <S.DownloadButton>Download the Etsy App</S.DownloadButton>
                  <S.IconsBox>icons</S.IconsBox>
                </S.HelpBox>
              )}
            </S.GuidesBox>
          ))}
        </S.GuidesWrapper>
      </S.Guides>
      <S.FooterWrap>
        <S.FooterBox>
          <S.LocaleInfo>
            {location} | {language} | $ ({currency})
          </S.LocaleInfo>
          <S.Policies>
            <span>2022 Etsy, Inc.</span>
            <S.PolicyList>
              {Array.from(
                ['Terms of use', 'Privacy', 'Interest-based ads'],
                li => (
                  <li key={li}>{li}</li>
                )
              )}
            </S.PolicyList>
          </S.Policies>
        </S.FooterBox>
      </S.FooterWrap>
    </S.FooterContainer>
  );
}

export default Footer;
