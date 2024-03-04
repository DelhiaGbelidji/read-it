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
  height: 420,
  borderColor: COLORS.gray600,
  borderRadius: '8px',
}))

export const Styled_CardContent = styled(CardContent)(() => ({
  height: 130,
  padding: '8px',
  display: 'flex',
  flexDirection: 'row',
  '&.MuiCardContent-root': {
    '&:last-child': {
      paddingBottom: '8px',
    },
  },
}))

const Rea_Card = ({imageUrl, title, description, onClick}: Type_Props_Card) => {
  return (
    <Styled_Card>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component='img'
          image={imageUrl ? imageUrl : '@public/assets/default.png'}
          alt={title}
          height={'380'}
        />
        {(title || description) && (
          <Styled_CardContent>
            {title && <Typography noWrap>{title}</Typography>}
            {description && <Typography noWrap>{description}</Typography>}
          </Styled_CardContent>
        )}
      </CardActionArea>
    </Styled_Card>
  )
}

export default Rea_Card
