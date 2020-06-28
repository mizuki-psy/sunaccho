import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const ContactPage = () => (
  <Layout title="みずき＠精神科医のブログ" 
    summary="発達障害を持つ女医がこころの病気と健康について語る。" 
    description="よりすぐりの正しいことを発信して、どこまでいけるのかチャレンジするブログ"
  >
    <h1>お問い合わせページ</h1>
    <p>メールフォーム</p>
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
    <input type="hidden" name="form-name" value="contact" />
    <input type="hidden" name="bot-field" />

      <div className="field">
        <label className="label">お名前<abbr title="required">*</abbr></label>
        <div className="control">
        <input type="text" className="input" id="name" name="name" placeholder="お名前" maxlength="30" minlength="2" required autocomplete="name" />
        </div>
      </div>
      <div className="field">
        <label>メールアドレス<abbr title="required">*</abbr></label>
        <div className="control has-icons-left has-icons-right">
          <input type="email" className="input is-danger" id="email" name="email" placeholder="" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" required autocomplete="email" />
        </div>
      </div>
      <div className="field">
        <label>お問い合わせ内容<abbr title="required">*</abbr></label>
        <div className="control">
          <textarea className="textarea" id="contact" name="content" cols="40" rows="20" required></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label>
          当サイトの <a href="https://mizuki-psy.jp/privacy/" target="_blank">プライバシーポリシー</a>同意します。<br />
          </label>
          <label class="radio">
            <input type="radio" name="question" />
            はい
          </label>
          <label class="radio">
            <input type="radio" name="question" />
            いいえ
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">送信</button>
        </div>
        <div class="control">
          <button class="button is-light is-link">キャンセル</button>
        </div>
      </div>


    </form>
    <h3>&nbsp;</h3>
    <Link to="/">ホームへ</Link>
  </Layout>
  


  
  
  
  
  
  
  
  
  
  
  
  
)

export default ContactPage
