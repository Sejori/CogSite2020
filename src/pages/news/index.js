import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../../components/SEO';
import Layout from '../../layouts/index';

const News = () => {
  return (
    <Layout bodyClass="page-teams">
      <SEO title="Team" />
      <div className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>News</h1>
              <p>
                Our team of qualified accountants and financial consultants can help your business
                at any stage of it’s growth.
              </p>
            </div>
          </div>
        </div>
      </div>


    </Layout>
  );
};

export default News;
