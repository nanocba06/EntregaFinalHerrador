
// eslint-disable-next-line react/prop-types
const ItemListContainer = ({greeting}) => {
  const greetingStyles = {
    fontSize: '3rem',
    fontWeight: '700',
    textAlign: 'center',
    color: '#f4f4f4'
  }
  return (
    <div style={greetingStyles}>{greeting}</div>
  )
}

export default ItemListContainer