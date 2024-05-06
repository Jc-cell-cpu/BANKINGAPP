import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSidebar';
// import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

function Home() {
    const loggedIn = { firstName: 'J', lastName: 'c', email: 'jc@protornmail.com' };
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1500.90}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSideBar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 1200.50 }, { currentBalance: 1800.2 }]}
            />
        </section>
    )
}

export default Home