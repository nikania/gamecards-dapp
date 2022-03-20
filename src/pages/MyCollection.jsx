import { Card } from 'antd';

const MyCollection = () => {
    return(
        <div  className="site-card-border-less-wrapper">
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>some point</p>
            </Card>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>some point</p>
            </Card>
            <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                <p>some point</p>
            </Card>
        </div>
    )
};

export default MyCollection;