import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Rates from '../components/Rates';

const Index = (props) => {
    return (
        <Layout>
            <h1 style={{color: '#222'}}>I am a Rate Exchanger</h1>
            <Rates rates={props.data}/>
        </Layout>
    )
};

Index.getInitialProps = async () => {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await res.json();
    return {
        data
    }
}

<style jsx>{`
    h1, {
        font-family: 'Open Sans';
        color: grey
    }
`}</style>

export default Index;

