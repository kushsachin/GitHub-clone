import { Card } from '@shopify/polaris'
import React, { useEffect, useState } from 'react'

export default function Repositories({ userData }) {
  var [polularRepo, setPolularRepo] = useState([])
  useEffect(() => {
    fetch(`https://api.github.com/users/${userData.login}/repos`, {
      headers: {
        Authorization: `Bearer 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`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setPolularRepo(data);
      })
  }, [userData])
  var visibility = <span className='visibility'>Public</span>
  return (
    <div className='popularRepo'>
      <Card title="Repositories" sectioned>
      {polularRepo.map((item, index) => {
        return <Card title={item.name} actions={[{ content: visibility }]} sectioned>
          <article className='userDescription'>{item.description}</article>
          <article className='dateOver'>Updated on {item.updated_at}</article>
        </Card>
      })}
      </Card>
    </div>
  )
}