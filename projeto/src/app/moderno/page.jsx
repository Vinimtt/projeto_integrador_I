// page.jsx
import React from "react";
import Link from "next/link";
import styles from "../styles/projects.module.css";
import ContatoSection from "../../components/ContatoSection";

export default function Page() {
  return (
    <>
      {/* BOTÃO DE VOLTAR */}
      <div className={styles["black-button-wrapper"]}>
        <Link href="/" className={styles["black-button"]}>
          ⬅ Voltar ao site
        </Link>
      </div>

      {/* CONTAINER DO PROJETO */}
      <div className={styles["project-container"]}>
        <h1 className={styles["project-title"]}>Centro Comercial & Lazer</h1>

        <div className={styles["project-image-wrapper"]}>
          <img
            src="/images/casa4.jpg"
            alt="Imagem do projeto"
            className="project-image"
          />
        </div>

        <p className={styles["project-description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque volutpat, mauris at dictum dictum, justo lorem facilisis nisl, vel maximus lectus risus vel ligula. Donec id semper lorem. Vivamus non aliquet orci.
          <br /><br />
          Suspendisse potenti. Vestibulum tincidunt sapien sit amet ligula facilisis placerat. Duis blandit, libero non rhoncus blandit, tellus lorem aliquam risus, eget elementum odio lorem a augue.
          <br /><br />
          Integer lacinia, nisl vel posuere gravida, eros orci sagittis ipsum, nec feugiat neque lectus id ipsum. Ut auctor odio eget mi ultricies, vel dictum erat volutpat. Aenean fringilla consectetur augue ac porta.
          <br /><br />
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed faucibus ante quis arcu auctor posuere. Nullam eget orci ac libero scelerisque lobortis id in justo.
          <br /><br />
          Nam dignissim interdum nisl nec pharetra. Mauris interdum ligula in nisi pretium, nec convallis libero varius. Donec dapibus metus a ultrices commodo. Aliquam non mi odio.
        </p>
      </div>

      {/* SEÇÃO QUE PREENCHE TODA A TELA */}
      <ContatoSection />
    </>
  );
}
