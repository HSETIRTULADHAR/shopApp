import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Data from '../products.json'
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'

const showResults = 'Showing 01 - 12 of 139 Results'
const Shop = () => {
    const [gridList ,setGridList] = useState(true);
    const [products,setProducts] = useState(Data);
    //pagination

    const [currentPage,setCurrentPage] = useState(1);
    const productPerPage = 12;
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOfLastProduct); 

    //functoin to change the current page

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //filter products based on catetgory

    const [selectedCategory, setSelectedCategory] = useState("All");
    const menuItems = [...new Set(Data.map((Val) => Val.category))];
    console.log("Menu items = ",menuItems);

    const filterItem  = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category === curcat;
        })

        setSelectedCategory(curcat);
        setProducts(newItem);
    }

  return (
    <div>
        <PageHeader title='Our Shop Page' curPage="Shop" />

        {/*shop page*/}
        <div className='shop-page padding-tb'>
            <div className='container'>
                <div className='row justify-content-center'>
                    {/*Left col*/}
                    <div className='col-lg-8 col-12'>

                        <article>
                            { /*Layout and title here*/}
                            <div className='shop-title d-flex flex-wrap justify-content-between'>
                                <p>{showResults}</p>
                                <div className={`product-view-more ${gridList ? "gridActive": "listActive"}`}>
                                    <a className='grid' onClick={() => setGridList(!gridList)}>
                                        <i className='icofont-ghost'></i>
                                    </a>
                                    <a className='list' onClick={() => setGridList(!gridList)}>
                                        <i className='icofont-listine-dots'></i>
                                    </a>
                                </div>
                            </div>
                            {/* Product Cards */}
                            <div className=''>
                                <ProductCards gridList={gridList} products={currentProducts} />
                            </div>

                            <Pagination 
                                productPerPage={productPerPage}
                                totalProducts={products.length}
                                paginate={paginate}
                                activePage={currentPage}
                                />
                        </article>
                    </div>
                    {/*Right col*/}

                    <div className='col-lg-4 col-12'>
                        <aside>
                            <Search products={products} gridList={gridList}/>
                            <ShopCategory 
                                filterItem={filterItem}
                                setItem = {setProducts}
                                setProducts = {setProducts}
                                menuItems={menuItems}
                                selectedCategory= {selectedCategory}
                                />
                        </aside>
                    </div>

                </div>

            </div> 

        </div>
    </div>
  )
}

export default Shop
