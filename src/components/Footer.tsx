import React from 'react';
import styled from 'styled-components';
import { aboutList, guideList } from '../constants/footerLists';
import { currency, language, location } from '../constants/localeSetting';

function Footer() {
  return (
    <FooterContainer>
      <About>
        <h1>What is Etsy?</h1>
        <p>Read our wonderfully weird story</p>

        <div>
          {aboutList.map(
            (el: { title: string; contents: string; extra?: string }) => (
              <div key={el.title}>
                <h2>{el.title}</h2>
                <p>
                  {el.contents}
                  {el.extra && <span>{el.extra}</span>}
                </p>
              </div>
            )
          )}
        </div>

        <h3>Have a question? Well, we’ve got some answers.</h3>

        <button>Go to Help Center</button>
      </About>

      <Subscribe>
        <h4>
          Yes! Send me exclusive offers, unique gift ideas, and personalized
          tips for shopping and selling on Etsy.
        </h4>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </form>
        <div>
          <p>Etsy is powered by 100% renewable electricity.</p>
        </div>
      </Subscribe>
      <Guides>
        {guideList.map(
          (
            el: {
              title: string;
              list: string[];
            },
            index: number
          ) => (
            <div key={el.title}>
              <h4>{el.title}</h4>
              <ul>
                {el.list.map((li: string) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
              {index === guideList.length - 1 && (
                <div>
                  <button>Download the Etsy App</button>
                  <div>icons</div>
                </div>
              )}
            </div>
          )
        )}
      </Guides>
      <FooterWrap>
        <div>
          {location} | {language} | $ ({currency})
        </div>
        <div>
          <span>2022 Etsy, Inc.</span>
          <ul>
            <li>Terms of use</li>
            <li>Privacy</li>
            <li>Interest-based ads</li>
          </ul>
        </div>
      </FooterWrap>
    </FooterContainer>
  );
}

const FooterContainer = styled.div``;

const About = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 14px;
    text-decoration: underline;
    text-align: center;
    cursor: pointer;
    margin-top: 5px;
    color: black;
    transition: color 0.2s ease-in-out;
  }
  & > p:hover {
    color: gray;
  }

  & > div {
    display: flex;
    div {
      flex: 1;
      margin: 10px;
      h2 {
        padding: 0;
      }
      p {
        font-size: 16px;
        line-height: 28px;
        span {
          cursor: help;
          border-bottom: 2px dashed black;
        }
      }
    }
  }

  h3 {
    font-size: 21px;
    font-weight: bold;
  }

  button {
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    padding: 10px 15px;
    border-radius: 30px;
    border: 2px solid black;
    margin-top: 20px;
    background: transparent;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;
  }
  button:hover {
    transform: scale(1.02);
  }
`;

const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  h4 {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }
  form {
    display: flex;
    width: 100%;
    height: 48px;
    max-width: 480px;
    border: 1px solid gray;
    border-radius: 50px;
    overflow: hidden;
    box-shadow: 1px 2px 4px 0 rgba(34, 34, 34, 0.1) inset;
    margin-bottom: 50px;
    input {
      background: rgba(34, 34, 34, 0.05);
      padding: 10px 0 10px 20px;
      width: 100%;
      border: none;
      outline: none;
      font-size: 16px;
    }
    button {
      background: rgba(34, 34, 34, 0.05);
      width: fit-content;
      padding: 0 15px;
      border: none;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      position: relative;
      color: #222;
    }
    button::after {
      content: '';
      font-size: 16px;
      line-height: 46px;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform: scale(0.85);
      transition: transform 0.1s ease-in-out;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      z-index: 5;
    }
    button::before {
      content: '';
      font-size: 16px;
      line-height: 46px;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      color: #fff;
      z-index: 6;
    }
    button:hover::after,
    input:focus ~ button::after {
      transform: scale(1);
      background: #222;
      color: #fff;
    }
    button:hover::before,
    input:focus ~ button::before {
      content: 'Subscribe';
      color: #fff;
    }
  }

  div {
    p {
      font-size: 16px;
      line-height: 28px;
      cursor: help;
      border-bottom: 2px dashed black;
    }
  }
`;

const Guides = styled.div`
  display: flex;
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    h4 {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 15px;
    }
    ul {
      font-size: 13px;
    }
    li {
      margin-bottom: 10px;
      cursor: pointer;
    }
    li:hover {
      text-decoration: underline;
    }
    & > div {
      button {
        font-weight: bold;
        border: none;
        min-height: 36px;
        padding: 5px 15px;
        cursor: pointer;
        background: transparent;
        position: relative;
      }
      button::after {
        content: '';
        width: 100%;
        min-height: 36px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1);
        border-radius: 36px;
        border: 2px solid #222;
        transition: transform 0.2s ease-in-out;
      }
      button:hover::after {
        transform: translate(-50%, -50%) scale(1.05);
      }
    }
  }
`;

const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  padding: 20px;
  div:first-child {
    display: inline-block;
    font-weight: 500;
    line-height: 1.4;
    min-height: 36px;
    min-width: 36px;
    padding: 9px 15px;
    border-radius: 36px;
    background-color: #222;
    cursor: pointer;
  }
  div:first-child:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  div:last-child {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      margin-left: 5px;
    }
    li {
      margin: 10px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default Footer;
