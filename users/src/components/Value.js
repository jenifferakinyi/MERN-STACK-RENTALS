import React from "react";
const Value = () => {
    return (
        //safety tips for clients
        <div className="Buyers-guide flex flex-col lg:flex-row mt-10">
            <div className="pl-16">
                <hr className="w-96 h-px my-0 bg-orange-600 border-0 dark:bg-orange-600" /><br/>
                <p className="text-3xl font-roboto font-medium">RENTAL GUIDE</p><br/>
                <hr className="w-96 h-px my-0 bg-orange-600 border-0 dark:bg-orange-600" /><br/>
                <p className="font-roboto font-medium text-gray-500">Safety tips to know before choosing your perfect rental</p><br/>
                <img src="/images/guide.jpg" alt="" style={{ borderRadius: "10px" }} />
            </div>
            <div className="pl-20">
            <h1 className="font-roboto font-medium">DO NOT PAY FOR INSPECTION FEE</h1>
            <p className="font-roboto font-medium text-gray-500 leading-8">When booking a visit to the rental appartment don't pay for inspection fee, inspection fee is free </p><br/><br/>
            <h1 className="font-roboto font-medium">GO FOR REVIEWING WITH COMPANY</h1>
            <p className="font-roboto font-medium text-gray-500 leading-8">When going for a review visit ensure you have someone acompany you</p><br/><br/>
            <h1 className="font-roboto font-medium">CHECK HOUSE PHOTO CAREFULLY</h1>
            <p className="font-roboto font-medium text-gray-500 leading-8">Ensure you check the house photo carefull to make sure it what you need and fits your price</p><br/><br/>
            <h1 className="font-roboto font-medium">DON'T PAY DEPOSIT IN ADVANCE</h1>
            <p className="font-roboto font-medium text-gray-500 leading-8">If its impossiple to move to the appartment imediately,don't pay deposit in advance</p><br/><br/>
            <h1  className="font-roboto font-medium">CONTACT US ANYTIME</h1>
            <p className="font-roboto font-medium text-gray-500 leading-8">In case of any issue Contact us at any time we are available 24/7 </p>
            </div>
        </div>     
    );
}

export default Value;