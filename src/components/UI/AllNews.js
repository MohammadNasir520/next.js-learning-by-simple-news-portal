import React from 'react';
import { Card, Col, Grid, Row } from 'antd';
import {
    ArrowRightOutlined,
} from "@ant-design/icons";
import Link from 'next/link';
const { Meta } = Card;
const AllNews = ({ allNews }) => {
    console.log(allNews)

    return (

        <div>
            <Row>
                {
                    allNews.map(news => {
                        return <>
                            <Col >
                                <Card

                                    hoverable
                                    style={{
                                        width: 300,

                                    }}
                                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                >
                                    <Meta title={news.title} description="www.instagram.com" />
                                    <Link href={`news/${news?.id}`}>

                                        <p
                                            style={{
                                                fontSize: "20px",
                                                margin: "20px 0px",
                                                backgroundColor: "black",
                                                color: "white",
                                                width: "168px",
                                                padding: "2px 5px ",
                                                fontWeight: "300",
                                                letterSpacing: "3px",
                                            }}
                                        >
                                            Keep Reading <ArrowRightOutlined />
                                        </p>
                                    </Link>
                                </Card>
                            </Col>
                        </>
                    })

                }
            </Row>

        </div>




    )
};
export default AllNews;
