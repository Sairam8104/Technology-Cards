// Write your code here.
import './index.css'

const TechnologyCard = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card

  return (
    <li className={`${className} card-container`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="img-container">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default TechnologyCard
