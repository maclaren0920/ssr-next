import React from 'react'
import { NextPageContext } from 'next';
import css from "./style.scss";

interface Props {
  userAgent?: string;
}

export default class UserPage extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
    return { userAgent }
  }

  render() {
    const { userAgent } = this.props
    return <main className={css.example}>Your user agent: {userAgent}</main>
  }
}