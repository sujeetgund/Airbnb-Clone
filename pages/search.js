import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { format } from 'date-fns';
import InfoCards from '../components/InfoCards';

const Search = ({ searchResults }) => {
    const router = useRouter()
    const { location, startDate, endDate, noOfGuests } = router.query;
    console.log(location, startDate, endDate, noOfGuests)

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`
    return (

        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p>
                        300+ stays - {range} - for {noOfGuests} guests
                    </p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                    <div className='hidden lg:inline-flex mb-5 space-x-4 whitespace-nowrap text-gray-800'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type Of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms & Beds</p>
                        <p className='button'>More Filters</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults && searchResults.map(result => {
                            return <InfoCards
                                key={result.img}
                                img={result.img}
                                location={result.location}
                                title={result.title}
                                price={result.price}
                                description={result.description}
                                star={result.star}
                                total={result.total}
                            />
                        })}
                    </div>

                </section>

            </main>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {
    const searchData = await fetch("https://links.papareact.com/isz")
    const searchResults = await searchData.json();

    return {
        props: { searchResults }, // will be passed to the page component as props
    }
}

export default Search