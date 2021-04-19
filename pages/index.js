import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { TinaProvider, TinaCMS, useCMS, useForm, usePlugin } from 'tinacms';
export default function Home() {
  const cms = useCMS();
  const pageData = {
    title: 'Tina is not a CMS',
    body: 'It is a toolkit for creating a custom CMS.',
  }
  const formConfig = {
    id: 'tina-tutorial-index',
    label: 'Edit Page',
    fields: [
      {
        name: 'title',
        label: 'Title',
        component: 'text',
      },
      {
        name: 'body',
        label: 'Body',
        component: 'textarea',
      },
    ],
    initialValues: pageData,
    onSubmit: async () => {
      window.alert('Saved!')
    },
  }

  const [editableData, form] = useForm(formConfig)
  usePlugin(form)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        {editableData.title}
        </h1>

        <p className={styles.description}>
        {editableData.body}
        </p>

      
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> 

        <button onClick={() => cms.toggle()}>
          {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
        </button>
      </footer>
    </div>
  )
}
