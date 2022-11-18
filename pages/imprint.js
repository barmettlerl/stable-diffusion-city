import StateContext from '../StateContext';
import { useRouter } from 'next/router'
import { useContext, useEffect, useMemo, useState } from 'react';
import Page from '../Page'
import Link from 'next/link'


const Imprint = () => {


    return (
        <Page>

            <div className='container mt-4 has-text-centered'>

                <h1 className='page__title'>Impressum</h1>
                <section className='section'>
                    <h4 className='subtitle'>Erstellt von</h4>
                    <address>
                        originate GmbH<br />
                        Gallusstrasse 32<br />
                        9000 St.Gallen<br />
                    </address>
                    <p><a href='https://www.originate.ch/' rel="noreferrer" target='_blank' title='originate GmbH'>www.originate.ch</a></p>
                </section>
                <section className='section'>
                    <h4 className='subtitle'>Bildquelle</h4>
                    <p>
                        <a href='https://commons.wikimedia.org/' rel="noreferrer" target='_blank' title='Wikimedia Commons'>Wikimedia Commons</a>
                    </p>
                </section>
                <section className='section'>
                    <h4 className='subtitle'>Mitwirkungsplattform<br />der Stadt St. Gallen</h4>
                    <p>
                        <a href='https://partizipieren.stadt.sg.ch/' rel="noreferrer" target='_blank' title='Partizipieren Stadt St.Gallen'>partizipieren.stadt.sg.ch</a>
                    </p>
                </section>
                <section className='section'>
                    <Link
                        href="/">
                        <button className='button is-primary'>Zurück zu Start</button>
                    </Link>
                </section>


            </div>
        </Page>
    )


}

export default Imprint
