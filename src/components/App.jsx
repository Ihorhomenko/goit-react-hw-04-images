import { useState } from 'react';
import Searchbar from './searchbar/searchbar';
import ImageGallery from './imageGallery/imageGallery';
import Button from './button/button';
import { BallTriangle } from  'react-loader-spinner'
import Modal from './modal/modal';
import ApiImages from 'services/services';
import '../index.css'

function App () {
  // state = {
  //   searchValue: '',
  //   largeUrl: '',
  //   gallery: [],
  //   loader: false,
  //   page: 1
  // }

  const [searchValue, setSearchValue] = useState('');
  const [gallery, setGallery] = useState([])
  const [page, setPage] = useState(1)
  const [loader, setLoader] = useState(false)

  
const handleSubmit = (e) => {
    e.preventDefault()
    const value = e.currentTarget.elements.search.value;
    setSearchValue(value)
    e.currentTarget.reset()
    setLoader(true)
    ApiImages.fetchImages(value, page).then(data => setGallery(data.hits)).finally(() => setLoader(false))
    setPage(page + 1)
  }

const handleButonClick = () => {
    console.log(searchValue)
    ApiImages.fetchImages(searchValue, page).then(data => setGallery([...gallery, ...data.hits]))
    setPage(page + 1)
  }

// handleModalClick = (largeUrl) => {
//     this.setState({largeUrl})
// }

// hundeCloseModal = () => {
//   this.setState({largeUrl: ""})
// }


    return (
      <div>
        <Searchbar onSubmit={handleSubmit}/>
        {loader && <BallTriangle height = "180"
                                width = "180"
                                color = '#3f51b5'
                                wrapperClass = {'loader'}
                              />}
        <ImageGallery gallery={gallery}/>
        {/* {this.state.largeUrl && <Modal url={this.state.largeUrl} onClose={this.hundeCloseModal}/> } */}
        {gallery.length !== 0 && <Button onClick={handleButonClick}/>}
      </div>

    );
  }
  // onClick={this.handleModalClick}  
  

export default App;