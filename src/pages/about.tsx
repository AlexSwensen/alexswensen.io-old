import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <p>Hey there, my name is Alexander Swensen.</p>
                <p>
                  I enjoy building apps in <a href="https://angular.io/">Angular</a>,{' '}
                  <a href="https://reactjs.org/">React.js</a>, <a href="https://vuejs.org/">Vue</a>, as well as with Node,{' '}
                  <a href="http://flask.pocoo.org/">Flask</a>, and{' '}
                  <a href="https://www.djangoproject.com/">Django</a>.
                </p>
                <h3 id="favorite-languages-frameworks-and-practices">
                  Favorite Languages, Frameworks, and Practices
                </h3>
                <ul>
                  <li>TypeScript (Because types!)</li>
                  <li>Angular</li>
                  <li>React</li>
                  <li>VueJS</li>
                  <li>Python</li>
                  <li>C#</li>
                  <li>C++</li>
                </ul>
                <h3 id="nerdy-things-i-like">Nerdy Things I like</h3>
                <ul>
                  <li>Dungeons &amp; Dragons</li>
                  <li>3D Printing</li>
                  <li>Internet of Things</li>
                  <li>Psychology</li>
                  <li>Politics / Current Events</li>
                </ul>
                <h3 id="personal-interests">Personal Interests</h3>
                <ul>
                  <li>Photography</li>
                  <li>Video</li>
                  <li>Visual Special Effects (CGI, Compositing, etc)</li>
                  <li>Video Games</li>
                  <li>Software Development</li>
                  <li>Embedded Development (Arduino, Raspberry Pi, etc.)</li>
                  <li>
                    Coffee <i className="fa fa-coffee" ></i>
                  </li>
                </ul>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
