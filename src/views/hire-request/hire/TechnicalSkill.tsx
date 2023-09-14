import { Card, Typography } from '@mui/material'
import React from 'react'

const TechnicalSkill = () => {
  return (
    <>
      <Card className='technical-skill card'>
        <Typography className='head-top ' variant='h5'>
          Technical Skill
        </Typography>
        <div className='summery'>
          <Typography>
            With Next.js, your React applications start with a rich structure and set of features. Built-in routing,
            server-side rendering, and among numerous other features, Next.js is a powerful framework built upon React
            to create production-ready applications.
          </Typography>

          <Typography>
            On top of that, Next.js also offers first-class support for TypeScript. This means that you can easily start
            building efficient React applications with all of the advantages of a strongly-typed language like
            TypeScript.
          </Typography>
          <Typography>
            It only takes a little configuration to get your Next.js project running with TypeScript. Learn how to do
            just that in this guide. 
          </Typography>
        </div>
      </Card>
    </>
  )
}

export default TechnicalSkill
