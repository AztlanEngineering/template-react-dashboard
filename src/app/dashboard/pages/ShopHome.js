/* @fwrlines/generator-react-component 2.2.5 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Page, Heading } from '@fwrlines/ds'


//Config
//import C from 'ui/cssClasses'

//Intl

import { FormattedMessage } from 'react-intl'
import messages from './messages'
// <FormattedMessage {...messages.title} />

//const baseClassName = 'page_shop_home'
const baseId = 'page_shop_home'

const helmet = {
  robots   :'noindex, nofollow',
  title    :'test of the title',
  title_tag:'this should appear in the title tag'

  /*
  canonical          :'https://home.com/description',
  meta_description   :'This is the meta description. 170 chars.',
  twitter_title      :'For twitter, a title',
  twitter_description:'',
  twitter_image      :'',
  og_title           :'This is the open graph title',
  og_description     :'',
  og_image           :'',
  og_type            :'',
  og_url             :'',
  */
}


const mainHeadingProps = {
  //id,
  //className:'uc',
  //style,
  //children, //appended at bottom

  subtitle:<FormattedMessage {...messages.shop_home_subtitle} />,
  //subtitleClassName,
  //subtitleProps:{},

  heading  :<FormattedMessage {...messages.shop_home_title} />,
  //headingClassName:'ts-green',
  headingAs:'h1'
  //headingProps :{}

  //label           :'Film',
  //labelClassName  :'x-red basic',
  //labelAs:'p',
  //labelProps :{}
}

/**
 * Page `ShopHome`
 * Description :
 */
const ShopHome = ({
  history,
  location,
  match
}) => (
  <Page
    id={baseId}
    itemType="https://schema.org/FAQPage"
    HELMET={helmet}
  >
    <Page.Section
      head
      className="p-u u2"
      id="head"
    >
    
      <Heading {...mainHeadingProps} />
    </Page.Section>
    <Page.Section
      id="a1"
      className="p-u u2"
    >
      <h2>Section A2</h2>
      <p>Some content here. Blah blah</p>
    
    </Page.Section>
    <Page.Section
      id="a2"
      className="p-u u2"
    >
      <h2>Section A2</h2>
      <p>Some content here. Blah blah</p>
    
    </Page.Section>
  </Page>
)

ShopHome.propTypes = {

  /**
   *
   */
  someprop:PropTypes.node

  /*
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
  : PropTypes.func,
  styles: PropTypes.object,
  : PropTypes.oneOf(['', ''])
  */
}

/*
ShopHome.defaultProps = {
  status: 'neutral',
}
*/


export default ShopHome
