import Layout from "../components/Layout";
import styles from "../styles/brief.module.css";
import { services } from "../utils/services";
import { budget } from "../utils/budget";
import { analytics } from "../utils/analytics";
import React, {useState } from "react";
import { useDropzone } from "react-dropzone";

export default function Brief() {
  const [isSent, setSent] = useState(false);

  const fileUpload = async (file) => {
    const options = {
      method: "POST",
      body: file,
    };

    const response = await fetch(`/api/file1`, options);

    if (response.status === 200) {
      setSent(true);
    } else {
      console.log("na-na");
    }
  };

  const sendForm = (event) => {
    event.preventDefault();

    const formData = new FormData();

    Array.from(event.currentTarget.elements).forEach((field) => {
      if (!field.name) return;
      if (field.type == "checkbox" && field.checked) {
        formData.append(field.name, field.name);
      }
      if (
        (field.type == "text") |
        (field.type == "tel") |
        (field.type == "email")
      ) {
        formData.append(field.name, field.value);
      }
    });

      if (acceptedFiles[0]) {
        formData.append("file", acceptedFiles[0]);
      }


    fileUpload(formData);
  };

  const initialValues = {
    cil: false,
    name: false,
    firma: false,
    email: false,
    tel: false,
  };

  const [isActive, setActive] = useState({ initialValues });

  function handleOnInput(e) {
    const { name } = e.target;
    if (e.target.value.length > 0) {
      setActive({
        ...isActive,
        [name]: true,
      });
    } else {
      setActive({
        ...isActive,
        [name]: false,
      });
    }

    //Textarea only
    if (e.target.id == "cil") {
      e.target.style.height = "auto";
      if (e.target.value.split(/\r\n|\r|\n/).length <= 1) {
        e.target.style.height = 33 + "px";
      } else {
        e.target.style.height = e.target.scrollHeight + 10 + "px";
      }
    }
  }

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
    useDropzone();

  return (
    <Layout>
      <h1 id="test" className={styles.bigHeading}>
        Brief
      </h1>
      <div>Vyplňte jednoduchý formulář. Spolu si domluvíme konzultaci.</div>
      {isSent && <div className={styles.congrats}>Děkuji!</div>}
      {!isSent && (
        <form className={styles.form} onSubmit={sendForm}>
          <section className={styles.section}>
            <h2 className={styles.heading}>Co?</h2>
            <div className={styles.checkboxes}>
              {services.map((service) => {
                return (
                  <div key={service.id}>
                    <input type="checkbox" id={service.id} name={service.id} />
                    <label className={styles.checkLabel} htmlFor={service.id}>
                      {service.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Jaký máte rozpočet? (Kč)</h2>
            <div className={styles.checkboxes}>
              {budget.map((price) => {
                return (
                  <div key={price.id}>
                    <input type="checkbox" id={price.id} name={price.id} />
                    <label className={styles.checkLabel} htmlFor={price.id}>
                      {price.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Cíl</h2>
            <div className={styles.input}>
              <label
                className={
                  isActive.cil
                    ? styles.valid + " " + styles.label
                    : styles.label
                }
                htmlFor="cil"
              >
                Popis
              </label>
              <textarea
                className={styles.textarea}
                name="cil"
                id="cil"
                onChange={handleOnInput}
              ></textarea>
            </div>

            <div {...getRootProps({ className: styles.dropzone })}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Přetáhněte soubor sem...</p>
              ) : (
                <p>Přetáhněte soubor sem nebo kliknutím vyberte soubor</p>
              )}
            </div>
            {acceptedFiles[0] && (
              <aside>
                <div>File: {acceptedFiles[0].path}</div>
              </aside>
            )}
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Kon-takt</h2>
            <div className={styles.contacts}>
              <div className="row">
                <div className={styles.input + " " + "col2"}>
                  <label
                    className={
                      isActive.name
                        ? styles.valid + " " + styles.label
                        : styles.label
                    }
                    htmlFor="name"
                  >
                    Jméno
                  </label>
                  <input
                    type="text"
                    className={styles.textarea}
                    name="name"
                    id="name"
                    onChange={handleOnInput}
                    required
                  ></input>
                </div>

                <div className={styles.input + " " + "col2"}>
                  <label
                    className={
                      isActive.firma
                        ? styles.valid + " " + styles.label
                        : styles.label
                    }
                    htmlFor="firma"
                  >
                    Firma
                  </label>
                  <input
                    type="text"
                    className={styles.textarea}
                    name="firma"
                    id="firma"
                    onChange={handleOnInput}
                  ></input>
                </div>
              </div>

              <div className="row">
                <div className={styles.input + " " + "col2"}>
                  <label
                    className={
                      isActive.email
                        ? styles.valid + " " + styles.label
                        : styles.label
                    }
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={styles.textarea}
                    name="email"
                    id="email"
                    onChange={handleOnInput}
                    required
                  ></input>
                </div>

                <div className={styles.input + " " + "col2"}>
                  <label
                    className={
                      isActive.tel
                        ? styles.valid + " " + styles.label
                        : styles.label
                    }
                    htmlFor="tel"
                  >
                    Telefonní číslo
                  </label>
                  <input
                    type="tel"
                    className={styles.textarea}
                    name="tel"
                    id="tel"
                    onChange={handleOnInput}
                    required
                  ></input>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>A jak jste nás našli?</h2>
            <div className={styles.checkboxes}>
              {analytics.map((analytic) => {
                return (
                  <div key={analytic.id}>
                    <input
                      type="checkbox"
                      id={analytic.id}
                      name={analytic.id}
                    />
                    <label htmlFor={analytic.id}>{analytic.name}</label>
                  </div>
                );
              })}
            </div>
          </section>

          <button className={styles.button} type="submit">
            Odeslat
          </button>
        </form>
      )}
    </Layout>
  );
}
