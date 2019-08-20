import cats from '../data/cats'
import dogs from '@/data/dogs'

// Applications state
export default {
  cats,
  dogs,
  pets: [...cats, ...dogs]
}
