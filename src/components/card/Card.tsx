import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  styled,
} from '@mui/material'
import {COLORS} from '@/utils/theme'

type Type_Props_Card = {
  imageUrl?: string
  title?: string
  description?: string
  onClick?: () => void
}

export const Styled_Card = styled(Card)(() => ({
  width: 300,
  borderColor: COLORS.grey600,
  borderRadius: '8px',
}))

export const Styled_CardContent = styled(CardContent)(() => ({
  height: '100%',
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
}))

const Rea_Card = ({imageUrl, title, description, onClick}: Type_Props_Card) => {
  return (
    <Styled_Card>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component='img'
          image={imageUrl ? imageUrl : '/assets/default.png'}
          alt={title}
          sx={{height: 200}}
        />
        {(title || description) && (
          <Styled_CardContent>
            {title && (
              <Typography variant='subtitle2' noWrap>
                {title}
              </Typography>
            )}
            {description && (
              <Typography variant='caption' noWrap>
                {description}
              </Typography>
            )}
          </Styled_CardContent>
        )}
      </CardActionArea>
    </Styled_Card>
  )
}

export default Rea_Card
