import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const News = () => {
  return (
    <Layout bodyClass="page-news">
      <SEO title="News" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>News</h1>
              <ul>
                <li>
                  <h4>
                    WHITE PAPER: THE PATIENT EXPERIENCE POST COVID-19
                  </h4>
                  <p>May 2020</p>
                  <a target="_blank" href={require('../../images/whitepaper-2020final.pdf')}>Download</a>
                </li>
                <li>
                  <h4>
                  COGNITANT GROUP LAUNCHES HEALTHINOTE APP WITH VERIFIED NHS CORONAVIRUS GUIDANCE
                  </h4>
                  <p>24th March 2020</p>
                  <a target="_blank" href={require('../../images/Healthinote_release_March2020.pdf')}>Download</a>
                </li>
                <li>
                  <h4>
                    COGNITANT GROUP SET FOR 2020 EXPANSION AFTER SUCCESSFUL DEBUT YEAR
                  </h4>
                  <p>10th December 2019</p>
                  <a target="_blank" href={require('../../images/Cognitant_Year_Review_Dec19.pdf')}>Download</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </Layout>
  );
};

export default News;
