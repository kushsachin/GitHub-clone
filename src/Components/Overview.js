import { Card } from '@shopify/polaris'
import React, { useEffect, useState } from 'react'

export default function Overview({ userData }) {
    var [polularRepo, setPolularRepo] = useState([])
    useEffect(() => {
        fetch(`https://api.github.com/users/${userData.login}/repos`, {
            headers: {
                Authorization: `Bearer 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`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                data.splice(10, data.length)
                setPolularRepo(data);
            })
    }, [userData])
    var visibility = <span className='visibility'>Public</span>
    return (
        <Card sectioned
            title={"Hi, I'm " + userData.login + " 👋🏾 👩🏾‍💻"}>
            <article className='userIntro'>
                I'm a software engineer who is passionate about making contributing to open-source more approachable, creating technology to elevate people, and building community. Some technologies I enjoy working with include ReactJS, Jamstack (JavaScript, APIs + Markup) and GraphQL. In 2020, I was selected to be an inaugural GitHub Star star2 based on my involvement in the tech community. My interest in the React ecosystem led me to launch React Robins, a community for women and non-binary ReactJS developers.
            </article>

            <div className='popularRepo'>
                <h1 className='popularRepoHead'>Popular repositories</h1>
                {polularRepo.map((item, index) => {
                    return <Card title={item.name} actions={[{ content: visibility }]} sectioned>
                        <article className='userDescription'>{item.description}</article>
                        <article className='dateOver'>Updated on {item.updated_at}</article>
                    </Card>
                })}
            </div>
        </Card>
    )
}
