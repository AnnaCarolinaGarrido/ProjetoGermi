import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import { Button } from "../Button/Button";
import "./Form.scss";

export default function Form() {
  const [email, setEmail] = useState({ value: "", valid: true });
  return (
    <div className="outside-container">
      <div className="inner-container">
        <h3>Formulário de contato</h3>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Seu nome *" required />
          <input
            type="text"
            placeholder="Seu e-mail *"
            value={email.value}
            onChange={(e) =>
              setEmail({
                value: e.target.value,
                valid: e.target.value === "" ? true : /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value),
              })
            }
            required
          />
          {!email.valid && (
            <span className="email-error">Digite um email válido</span>
          )}
          <input type="text" placeholder="Assunto" />
          <input type="text" placeholder="Sua mensagem *" required />
          <ReCAPTCHA
            className="recaptcha"
            sitekey="6LdsuUojAAAAAJxJgTVtmDwwro-7xwbU2isk8kPN"
          />
          
          <Button text='Enviar'/>
        </form>
      </div>
    </div>
  );
}