import React, {useState} from 'react'
import { navigate } from 'gatsby-link'

import './Form.scss'


function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}


export default function Form ({FormName, title}) {

    const [states, setState] = useState(null);

    const handleChange = (e) => {
    setState({ [e.target.name]: e.target.value })
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

    return (
        <section className="tfp-form-wrap">
          
              <form
                name={FormName}
                method="post"
                // action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="tfp-form"
              >
                <h2 className="form-title">{title}</h2>

                <div className="fields-wrap">
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value={FormName} />
                    <div hidden>
                    <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={handleChange} />
                    </label>
                    </div>
                    <div className="field">
                    
                        <input
                            className="inputField"
                            type={'text'}
                            name={'subscriber-name'}
                            onChange={handleChange}
                            id={'subscriber-name'}
                            required={true}
                            placeholder="Name"
                        />
                    </div>
                    <div className="field">
                    
                        <input
                            className="inputField"
                            type={'email'}
                            name={'subscriber-email'}
                            onChange={handleChange}
                            id={'subscriber-email'}
                            required={true}
                            placeholder="Email"
                        />
                    </div>
                    
                    <div className="field">
                        <button className="button is-link btn-transparent btn-submit" type="submit">
                            Submit
                        </button>
                    </div>
                </div>
              </form>
        </section>
    );

}
