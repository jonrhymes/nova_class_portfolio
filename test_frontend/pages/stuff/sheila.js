import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Index = () => {
    return (
        <Layout>
            <h1>Hello World from Me</h1>
        </Layout>
    )
};

Index.getInitialProps = async () => {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const data = await res.json();
    return {
        data,
        sheila: 'a lot of money'
    }
}

export default Index;

