import React from 'react';
import { aboutList, guideList } from '../../constants/footerLists';
import { currency, language, location } from '../../constants/localeSetting';
import * as S from './Footer.style';

function Footer() {
  return (
    <S.FooterContainer>
      <S.About>
        <S.AboutTitle>What is Etsy?</S.AboutTitle>
        <S.AboutLink>Read our wonderfully weird story</S.AboutLink>
        <S.AboutList>
          {aboutList.map(({ title, contents, extra }) => (
            <S.AboutListContent key={title}>
              <S.ContentTitle>{title}</S.ContentTitle>
              <S.ContentParagraph>
                {contents}
                {extra && <span> {extra}</span>}
              </S.ContentParagraph>
            </S.AboutListContent>
          ))}
        </S.AboutList>
        <S.AboutFootTitle>
          Have a question? Well, we’ve got some answers.
        </S.AboutFootTitle>
        <S.AboutFootButton>Go to Help Center</S.AboutFootButton>
      </S.About>
      <S.Subscribe>
        <S.SubscribeTitle>
          Yes! Send me exclusive offers, unique gift ideas, and personalized
          tips for shopping and selling on Etsy.
        </S.SubscribeTitle>
        <S.SubscribeForm>
          <S.Input type="email" placeholder="Enter your email" />
          <S.SubscribeButton>Subscribe</S.SubscribeButton>
        </S.SubscribeForm>
        <S.SubscribeFooter>
          <S.SubscribeFooterInfo>
            Etsy is powered by 100% renewable electricity.
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
