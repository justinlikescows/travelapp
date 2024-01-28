const data = 
{
    "status": true,
    "message": "Success",
    "timestamp": 1706419191719,
    "data": {
    "aggregation": {
        "totalCount": 923,
        "filteredTotalCount": 923,
        "stops": [
        {
            "numberOfStops": 0,
            "count": 559,
            "minPrice": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "minPriceRound": {
            "currencyCode": "USD",
            "units": 408,
            "nanos": 0
            }
        },
        {
            "numberOfStops": 1,
            "count": 923,
            "minPrice": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "minPriceRound": {
            "currencyCode": "USD",
            "units": 408,
            "nanos": 0
            }
        }
        ],
        "airlines": [
        {
            "name": "Air India",
            "logoUrl": "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
            "iataCode": "AI",
            "count": 211,
            "minPrice": {
            "currencyCode": "USD",
            "units": 437,
            "nanos": 370000000
            }
        },
        {
            "name": "Air India Express",
            "logoUrl": "https://r-xx.bstatic.com/data/airlines_logo/IX.png",
            "iataCode": "IX",
            "count": 19,
            "minPrice": {
            "currencyCode": "USD",
            "units": 422,
            "nanos": 930000000
            }
        },
        {
            "name": "Air India Express",
            "logoUrl": "https://r-xx.bstatic.com/data/airlines_logo/I5.png",
            "iataCode": "I5",
            "count": 80,
            "minPrice": {
            "currencyCode": "USD",
            "units": 422,
            "nanos": 630000000
            }
        },
        {
            "name": "Alliance Air",
            "logoUrl": "https://r-xx.bstatic.com/data/airlines_logo/9I.png",
            "iataCode": "9I",
            "count": 5,
            "minPrice": {
            "currencyCode": "USD",
            "units": 537,
            "nanos": 850000000
            }
        },
        {
            "name": "IndiGo",
            "logoUrl": "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
            "iataCode": "6E",
            "count": 585,
            "minPrice": {
            "currencyCode": "USD",
            "units": 423,
            "nanos": 150000000
            }
        },
        {
            "name": "Vistara",
            "logoUrl": "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
            "iataCode": "UK",
            "count": 409,
            "minPrice": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            }
        }
        ],
        "departureIntervals": [
        {
            "start": "16:50",
            "end": "23:15"
        },
        {
            "start": "02:00",
            "end": "23:05"
        }
        ],
        "flightTimes": [
        {
            "arrival": [
            {
                "start": "00:00",
                "end": "05:59",
                "count": 253
            },
            {
                "start": "06:00",
                "end": "11:59",
                "count": 51
            },
            {
                "start": "12:00",
                "end": "17:59",
                "count": 0
            },
            {
                "start": "18:00",
                "end": "23:59",
                "count": 619
            }
            ],
            "departure": [
            {
                "start": "00:00",
                "end": "05:59",
                "count": 0
            },
            {
                "start": "06:00",
                "end": "11:59",
                "count": 0
            },
            {
                "start": "12:00",
                "end": "17:59",
                "count": 155
            },
            {
                "start": "18:00",
                "end": "23:59",
                "count": 768
            }
            ]
        },
        {
            "arrival": [
            {
                "start": "00:00",
                "end": "05:59",
                "count": 167
            },
            {
                "start": "06:00",
                "end": "11:59",
                "count": 228
            },
            {
                "start": "12:00",
                "end": "17:59",
                "count": 221
            },
            {
                "start": "18:00",
                "end": "23:59",
                "count": 307
            }
            ],
            "departure": [
            {
                "start": "00:00",
                "end": "05:59",
                "count": 128
            },
            {
                "start": "06:00",
                "end": "11:59",
                "count": 240
            },
            {
                "start": "12:00",
                "end": "17:59",
                "count": 296
            },
            {
                "start": "18:00",
                "end": "23:59",
                "count": 259
            }
            ]
        }
        ],
        "durationMin": 3,
        "durationMax": 22,
        "minPrice": {
        "currencyCode": "USD",
        "units": 407,
        "nanos": 930000000
        },
        "minRoundPrice": {
        "currencyCode": "USD",
        "units": 408,
        "nanos": 0
        },
        "minPriceFiltered": {
        "currencyCode": "USD",
        "units": 407,
        "nanos": 930000000
        },
        "baggage": [
        {
            "paramName": "includedBaggage",
            "count": 923,
            "enabled": true,
            "baggageType": "CABIN"
        },
        {
            "paramName": "includedBaggage",
            "count": 887,
            "enabled": true,
            "baggageType": "CHECKIN"
        }
        ],
        "budget": {
        "paramName": "maxBudget",
        "min": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
        },
        "max": {
            "currencyCode": "USD",
            "units": 1394,
            "nanos": 480000000
        }
        },
        "budgetPerAdult": {
        "paramName": "maxBudgetPerAdult",
        "min": {
            "currencyCode": "USD",
            "units": 186,
            "nanos": 910000000
        },
        "max": {
            "currencyCode": "USD",
            "units": 672,
            "nanos": 560000000
        }
        },
        "duration": [
        {
            "min": 3,
            "max": 22,
            "durationType": "JOURNEY",
            "enabled": true,
            "paramName": "maxDuration"
        },
        {
            "min": 2,
            "max": 19,
            "durationType": "LAYOVER",
            "enabled": true,
            "paramName": "maxLayoverDuration"
        }
        ]
    },
    "flightOffers": [
        {
        "token": "d7699_H4sIAAAAAAAA_y2QbU_CMBSFfw18Yl3blb2QNAbYQIUNBZnil2aUbkyRmbUG3K_3spk25zzn5ra5uUdjvvXItvNTWRyNtn40KipTFZlRSFZfdl6D7KvqszwXdlbW9mQVh9GS-o_jxMEgNhkQb4BtC44c7e7U1Vi6lrxf7hXKtOT-P9XcRU707szi16Qtycpwhhiessnb0zoNu2LN56mzWb-16cDj6eW6asY6DvVl1URe8rLzknASJtHjbhtFNGm02Z4edNqs4-VM4hfoW05xE28u5hnjntN9q6TkBCHmBaTNVaa505E0nOIOD4ZvvN39PO0ijIe9oGu7ckJd4iBCA5f0tTopacrqvFC_fLsIfNeCjWRnyqyFuGViwXLanPbolDDfHe6PQD1nDLcQGMFo4yM4Ac8EoRS9bwH3YgMqxY0PwmW55wMpYZFhroBywUBLQRBpn36Ih1ewRvjBKb-yP6PTnCPPAQAA",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T22:50:00",
            "arrivalTime": "2024-01-29T01:00:00",
            "legs": [
                {
                "departureTime": "2024-01-28T22:50:00",
                "arrivalTime": "2024-01-29T01:00:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 986,
                    "planeType": "321",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T21:30:00",
            "arrivalTime": "2024-01-30T23:40:00",
            "legs": [
                {
                "departureTime": "2024-01-30T21:30:00",
                "arrivalTime": "2024-01-30T23:40:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 981,
                    "planeType": "321",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 359,
            "nanos": 370000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 48,
            "nanos": 560000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 130000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK986_2_UK981",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2QUU-DMBSFf818ktJSNmBJYzbA6TaYDofOlwa6wtA5DK0O-fVewbQ55zs3t83NPWr9qaamWZyq8qiV8aVQWeu6zLREov4wiwYkr-v36lyaWdWY800UhGvLXc5iikFMck2ca2wacMR0fyNbbahGsKsqlyhTgrn_1LAJouErvY2e474kas1sZGPfnr88bFNvKDZskdJk-9KnA4v8S7vpZioK1GXThU78tHfiYB7E4XK_C0Mr7pTene5V2m2j9a3AT9C39nEXJRf9iPGIBv1HUghGELIdj_S5zhSjAwnNLDzgQbPE2d8t0iHCeNjxhraWEWtCKCKWNyFXSp6k0FV9Xskftlt5Y2zARrKzZRsrDtklBiynz-nI8gltv_PDBWhEZ3BLjhGMNjuCE_CME7xErzvAnCeggv_xgU_swnGBJDfIuJBABbdBK04Q6Z--8ftnsI673qlo7V-hjc9rzwEAAA..",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T21:55:00",
            "arrivalTime": "2024-01-29T00:10:00",
            "legs": [
                {
                "departureTime": "2024-01-28T21:55:00",
                "arrivalTime": "2024-01-29T00:10:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 950,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 8100,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 8100,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T21:30:00",
            "arrivalTime": "2024-01-30T23:40:00",
            "legs": [
                {
                "departureTime": "2024-01-30T21:30:00",
                "arrivalTime": "2024-01-30T23:40:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 981,
                    "planeType": "321",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 359,
            "nanos": 370000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 48,
            "nanos": 560000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 130000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK950_2_UK981",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2Qa0_CMBSGfw18cl1v7kLSGGDzBhsKMsEvzSjdmCLTtQbcr_dkM23e93lPTpuTc7D2y4xctzhW5cEa58egsrZ1mVuNVP3pFg3Irq4_qlPp5lXjThZJFM9p8DhOGQZxyRXxr7DrwFGj7Y2-WMc0SgyrnUa5USL4p0Z4iMVv7DZ5TbuSqq3giOMpn2yellncFxtxl7HVctOlvUim58uiHZskMudFG_vpy9ZPo0mUxo_bdRzTtDV2fXwwWbtM5rcKv0DffIrbZHW2zxgPWNR9pJUSBCHuh6TLdW4E60lZQXGPeytW_vb-LusjjIf9sG-7CEI9whChoUeGRh-1slV9mulfsZ6FgefARvIT5c5MQg6ZA8vpcjagU8LDb0UU0ICN4ZYSIxhtfAAn4LkklKJ5CLiTK1Al16B76fHCD4C0dMh1oYEKyUErSRDpnr7Lh1ewVgbhsbjwPzMzwYvPAQAA",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T22:50:00",
            "arrivalTime": "2024-01-29T01:00:00",
            "legs": [
                {
                "departureTime": "2024-01-28T22:50:00",
                "arrivalTime": "2024-01-29T01:00:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 986,
                    "planeType": "321",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T12:45:00",
            "arrivalTime": "2024-01-30T15:00:00",
            "legs": [
                {
                "departureTime": "2024-01-30T12:45:00",
                "arrivalTime": "2024-01-30T15:00:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 993,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 8100,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 8100,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 359,
            "nanos": 370000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 48,
            "nanos": 560000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 130000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK986_2_UK993",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2QbW-CMBSFf41-ktKWjpclzaKAm1Nw04m6Lw3WgmxOFtpFx6_fDSxtznnOzW1zc0_GfOt72y7OVXky2vrRqKxNXeZGIVl_2UUDcqjrz-pS2nnV2JNlEsUL6j-PUweD2GREvBG2LTjyfv-gbsbSjeTD6qBQriX3_6nhLnLid2eabNOuJGvDGWI4ZJPdyyoL-2LDHzNnvdp16ciT8HpbtmOdRPq6bGMvfdt7aTSJ0vh5v4ljmrbabM4znbWrZDGV-A36FiFuk_XVvGI8cKLuIyUlJwgxLyBdrnPNnZ6k4RT3eDR87e2fHrM-wnjYC_q2GyfUJQ4iNHDJUKuzkqaqL3P1yzfzwHct2Eh-ocyaC8jenQXL6XI2oCFhwaW6lkADZwy3FBjBaOMTOAHPBaEUBQvAg1iDSrEBPQqXFZ4PpIRF7goFVAgGWgmCSPf0Q8y2YK3wg3NxY3_D6avVzwEAAA..",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T22:50:00",
            "arrivalTime": "2024-01-29T01:00:00",
            "legs": [
                {
                "departureTime": "2024-01-28T22:50:00",
                "arrivalTime": "2024-01-29T01:00:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 986,
                    "planeType": "321",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T05:45:00",
            "arrivalTime": "2024-01-30T08:00:00",
            "legs": [
                {
                "departureTime": "2024-01-30T05:45:00",
                "arrivalTime": "2024-01-30T08:00:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 975,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 8100,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 8100,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 359,
            "nanos": 370000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 48,
            "nanos": 560000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 130000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK986_2_UK975",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2Qa2-CMBSGf41-kkIvAzRpFhV0XsA7yr40WBHZnCy0m8qv3xGXNu_7vCfnNM05af2tOqZ5POfZSSvjR6Gs0EWW6BTJ4ss8liD7ovjML5mZ5KXZmwWePyXuuBtSC8TELey0LNOAIzvxa3rThiolb-b7FCVKcvefSm4j6r_TQbAN65IsNGeIWX3W282X0eRZLPkwoqvlrk4HHvSvt1nVVYGnrrPKd8J17IRezwv9cbzxfRJWSm_OIxVVy2A6kNYa-qZ9qwpWV73Aiwb16odSKTlGiDltXOciUZw-SWpOrCceNF858dswekb4HiHMrsONY2JjijBp27ip0nMqdV5cJumdbyZt1zZgI8mFMGMiIFNqwHLqvGiQPmYvv22NgRq0CzcTFrLAT-AYPBGYEDTfAO7FClSKBx-E7bruozEVBrYZAzqKh-YCI1yPfojRFqwSTF6d--EP-DjBRs8BAAA.",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T22:50:00",
            "arrivalTime": "2024-01-29T01:00:00",
            "legs": [
                {
                "departureTime": "2024-01-28T22:50:00",
                "arrivalTime": "2024-01-29T01:00:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 986,
                    "planeType": "321",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T15:30:00",
            "arrivalTime": "2024-01-30T17:35:00",
            "legs": [
                {
                "departureTime": "2024-01-30T15:30:00",
                "arrivalTime": "2024-01-30T17:35:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 933,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7500,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 7500,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 422,
            "nanos": 460000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 373,
            "nanos": 300000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 49,
            "nanos": 160000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 423
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 422,
            "nanos": 460000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 423
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 172,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 172,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 100000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 100000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 30
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 30
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK986_2_UK933",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2QbW-CMBSFf41-kkJLBTRpFgV0TsH5rvvSYEFkc7LQLiC_fldY2pzznJt7m-ZelfqRQ12_3LL0qqT2K1GaqzyNVIJE_q1fCpBznn9l91SPskIfLwPPXxDnbRSaBoiOe9juGboGRwxPL0mlNFkI1s3OCYqkYM4_FcxCpv9hToJD2JRErhhF1HDp-Pi-3s_aYsGme3OzPjYpZoFbVst6JANPlsvat8PtyQ69sRf6b6ed75Owlmp3m8l9vQ4WE2FsoW_hGnWwKdUKrzqm1zyUCMEwQtQe4CbnkWRmS0IxYrQYK7axT6_TfRvhe4RQqwkVw8TCJsJkYOGuTG6JUFl-nycPtpsPHEuDjUR3QrU5h9zHGiynyasOcTHtP0hVAXXMEdyUG8gAv4Jj8IhjQlB4ADzzDajgO9CYW47jPBsTrmGLUqALf2rGMcLN6CefPcdqTkVpP-I_6a8MrM8BAAA.",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T22:50:00",
            "arrivalTime": "2024-01-29T01:00:00",
            "legs": [
                {
                "departureTime": "2024-01-28T22:50:00",
                "arrivalTime": "2024-01-29T01:00:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 986,
                    "planeType": "321",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T14:20:00",
            "arrivalTime": "2024-01-30T16:25:00",
            "legs": [
                {
                "departureTime": "2024-01-30T14:20:00",
                "arrivalTime": "2024-01-30T16:25:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 951,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7500,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 7500,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 422,
            "nanos": 460000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 373,
            "nanos": 300000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 49,
            "nanos": 160000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 423
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 422,
            "nanos": 460000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 423
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 172,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 172,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 100000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 100000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 30
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 30
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK986_2_UK951",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2QbW-CMBSFf41-ktKWjpclzaKCzhdw04m6Lw3WgmxOFtpFx6_fDSxtznnOzW1zc8_GfOtH284vZXE22vrRqKhMVWRGIVl92XkNcqyqz_Ja2FlZ26NVHEZL6s-HiYNBbDIg3gDbFhz5eHhSd2PpWvJ-eVQo05L7_1RzFznRuzOJd0lbkpXhDDE8ZqP9yzqddMWaT1Nns9636cTj8e2-aoY6DvVt1URe8nbwknAUJtH8sI0imjTabC8znTbreDmR-A36lmPcxJubecW454TtR0pKThBiXkDaXGWaOx1Jwynu8GT4xjs8T9MuwnjYC7q2OyfUJQ4iNHBJX6uLkqasrgv1y7eLwHct2Eh2pcxaCMhBYMFy2pz26JgwWd-kC9RzhnALgRGMNjyDE_BMEEoRwXPgo9iASrEFPQmX5Z4PpIRFHnIFlAsGWgqCSPv2Q8x2YI3wg0t-Z39D3oG20AEAAA..",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T22:50:00",
            "arrivalTime": "2024-01-29T01:00:00",
            "legs": [
                {
                "departureTime": "2024-01-28T22:50:00",
                "arrivalTime": "2024-01-29T01:00:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 986,
                    "planeType": "321",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T21:55:00",
            "arrivalTime": "2024-01-31T00:15:00",
            "legs": [
                {
                "departureTime": "2024-01-30T21:55:00",
                "arrivalTime": "2024-01-31T00:15:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 999,
                    "planeType": "321",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 8400,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 8400,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 359,
            "nanos": 370000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 48,
            "nanos": 560000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 130000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK986_2_UK999",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2QbW-CMBSFf41-ktJSFDFpFgR0U8HNF5R9abAWZHOy0C46fv1uYGlzznNubpube9H6W01MM7-WxUUr40ehotJVkWmJRPVl5jXIqao-y1thZmVtTtdREK6s8cKLKQYxyYA4A2wacMQkfZIPbahasH55kihTgo3_qWYjRMN3OosOcVsSlWY2srFvT4-vm8TrijWbJ3S7ObbpzCL__lg3nooCdV83oRPvUicOpkEcLtJ9GFpxo_T--qKSZhOtZgLvoG_l4yba3vUbxj0atB9JIRhByHZc0uYqU4x2JDSzcIdnzbZO-jxPugjjYcft2h6MWCNCEbHcEekreZVCl9VtKX_ZfukOsQEbyW6WbSw5ZJcasJw2Jz3LJ7TJS1oD9agHt-AYwWjeBZyAZ5zgBVq5gCe-BRV8D3rmIzt3xkCSG2SYS6Cc26AlJ4i0Tz_4ywGs4WP3mj_sP4O18FTPAQAA",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T21:55:00",
            "arrivalTime": "2024-01-29T00:10:00",
            "legs": [
                {
                "departureTime": "2024-01-28T21:55:00",
                "arrivalTime": "2024-01-29T00:10:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 950,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 8100,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 8100,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T12:45:00",
            "arrivalTime": "2024-01-30T15:00:00",
            "legs": [
                {
                "departureTime": "2024-01-30T12:45:00",
                "arrivalTime": "2024-01-30T15:00:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 993,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 8100,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 8100,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 359,
            "nanos": 370000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 48,
            "nanos": 560000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 130000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK950_2_UK993",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2QbW-CMBSFf41-ktJSFDFpFhV0U8HNF9R9abAWZHN2od1Ufv1uYGlzznNubpubezbmWw9sO7sU-dlo60ejXBmVp0Yiob7srAQ5KvVZXHM7LUp7tIyCcOH0Z8OYYhCbdIjXwbYFRwwOT_JuLF0K1i6OEqVasP4_layHaPhOJ9EurktCGeYiF4_d0f51lUybYsmmCV2v9nU6sWh8uy-roY4CfVtWoRdvDl4cjII4nB22YejElTbby4tOqlW0mAi8gb7FGFfR-mbeMG7RoP5ICsEIQq7nkzqrVDPakDDMwQ2eDFt7h-dp0kQYD3t-03ZnxOkRiojj90hby4sUplDXuXyw7dzvYgs2kl4d15pzyF7XguXUOWk5Y0IroR6_QC06hJtzjGC04RmcgKec4BnyF4BHvgYVfAt64j038_pAklukm0mgjLugBSeI1E8_-MsOrOJ9_5Ld3T8U2q0qzwEAAA..",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T21:55:00",
            "arrivalTime": "2024-01-29T00:10:00",
            "legs": [
                {
                "departureTime": "2024-01-28T21:55:00",
                "arrivalTime": "2024-01-29T00:10:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 950,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 8100,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 8100,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T05:45:00",
            "arrivalTime": "2024-01-30T08:00:00",
            "legs": [
                {
                "departureTime": "2024-01-30T05:45:00",
                "arrivalTime": "2024-01-30T08:00:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 975,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 8100,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 8100,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 359,
            "nanos": 370000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 48,
            "nanos": 560000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 130000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK950_2_UK975",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2Qa2-CMBSGf437NEpvAzRpFhXmvIDzxsa-NFgR2ZwstBPHr98Rlzbv-7wn5zTNORjzrXu2vT8W-cFo60ejvDRlnpoMqfLL3lcg27L8LE65nRaVPZiHfjCj3qQfMQxik3vi3mPbgqN6yWN2MZaulLgrthlKtRLeP1XCQSx4Z0_ha9SWVGkERxwP-eDtZRmHt2IlRjFbLd_atBPhsL7Mm74OfV3Pm8CN1okb-QM_CibJJgho1GizOY513CzD2ZPCa-ibDXETrmqzIIsO89uHMqUEQYi7XdLmMtWC3UgZQfENd0as3OR5FN8ifI9S7rThIgh1CEOEdh1yp7NjpkxRnqbZr9hMuw_Ygo2kJ8qtqYTMmAXLafOiQ4eEnT_35xyow_pwc4kRBj-AE_BUEjxBLxvArVyBKnnlnXQ8z7s2ZtIiDudAe3nVQhJE2tEPOX4FayRXtfu7-wOCbN0lzwEAAA..",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T21:55:00",
            "arrivalTime": "2024-01-29T00:10:00",
            "legs": [
                {
                "departureTime": "2024-01-28T21:55:00",
                "arrivalTime": "2024-01-29T00:10:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 950,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 8100,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 8100,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T15:30:00",
            "arrivalTime": "2024-01-30T17:35:00",
            "legs": [
                {
                "departureTime": "2024-01-30T15:30:00",
                "arrivalTime": "2024-01-30T17:35:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 933,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7500,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 7500,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 422,
            "nanos": 460000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 373,
            "nanos": 300000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 49,
            "nanos": 160000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 423
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 422,
            "nanos": 460000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 423
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 172,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 172,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 100000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 100000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 30
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 30
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK950_2_UK933",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2Qa2-CMBSGf41-ktLbuJg0iwK6qeAUr_vSYEFkc7LQbii_fhWXNu_7vCfnNM05KfUt-6Z5PBf5SUnjR4K8VGWeqAyI8ss8VloOZflZXHIzKSpzOA_9YIadySAiUIuJesjuQdPQR_T3z9lVGbISrFscMpBIwZx_qpgFSPBORuE2akuiVIwCCj063L0tN7NHsWLjDYmXuzalLPTq67wZyNCX9bwJ7Gi1tyN_6EfBZL8OAhw1Uq3Pr3LTLMPZSMCV7pt5sAnjWi3QokP89qFMCIYAoLaL2lwmkpEHCcUwfGCqWGzvX8abR9Tfw5habbgyhC1EAMKuhboyO2dCFeVlmt3Yeuo-QUNvJLlgakz5PSNDL6fNiw72EPm9uFBo6pCBvjmHAGo_aUfaE47gBERbjQceaxV8rTXlluM498aMG8iiVNOR37XgCKB29IO_3scaTkVt39I_3I59Zs8BAAA.",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T21:55:00",
            "arrivalTime": "2024-01-29T00:10:00",
            "legs": [
                {
                "departureTime": "2024-01-28T21:55:00",
                "arrivalTime": "2024-01-29T00:10:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 950,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 8100,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 8100,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T14:20:00",
            "arrivalTime": "2024-01-30T16:25:00",
            "legs": [
                {
                "departureTime": "2024-01-30T14:20:00",
                "arrivalTime": "2024-01-30T16:25:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 951,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7500,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 7500,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 422,
            "nanos": 460000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 373,
            "nanos": 300000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 49,
            "nanos": 160000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 423
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 422,
            "nanos": 460000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 423
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 172,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 172,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 100000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 100000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 30
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 30
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK950_2_UK951",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2QbW-CMBSFf41-kkJLB2jSLArofAHnG8q-NFgQ2ZwstAvKr98VlzbnPOfm3qa5Z6V-5EDXT5ciPyup_UqUl6rME5UhUX7rpwrkWJZfxTXXk6LSR8vA8xfEmQ1D0wDRcQ_bPUPX4IhB_JrdlCYrwbrFMUOJFMz5p4pZyPQ_zHGwD9uSKBWjiBouHR3e19HsWazYJDI360ObUha49W3ZDGXgyXrZ-Ha4je3QG3mhP4t3vk_CRqrdZSqjZh0sxsLYQt_CNZpgU6sVXnVMr30oE4JhhKjdx20uE8nMJwnFiPHEVLGNHb9NomeE7xFCrTbcGCYWNhEmfQt3ZXbJhCrK6zy7s92871gabCS5EqrNOWT6osFy2rzqEBdT-5QXNVDHHMLNuYEM8DM4Bk84JgTNJoBHvgEVfAeacstxnEdjxjVsUQp04g8tOEa4Hf3k0z1Yw6mo7Xv6B_PyvQvPAQAA",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T22:50:00",
            "arrivalTime": "2024-01-29T01:00:00",
            "legs": [
                {
                "departureTime": "2024-01-28T22:50:00",
                "arrivalTime": "2024-01-29T01:00:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 986,
                    "planeType": "321",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T11:40:00",
            "arrivalTime": "2024-01-30T13:50:00",
            "legs": [
                {
                "departureTime": "2024-01-30T11:40:00",
                "arrivalTime": "2024-01-30T13:50:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 945,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 422,
            "nanos": 460000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 373,
            "nanos": 300000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 49,
            "nanos": 160000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 423
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 422,
            "nanos": 460000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 423
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 172,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 172,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 80000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 194,
                "nanos": 180000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 195
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 100000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 100000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 100000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 30
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 30
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 570000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK986_2_UK945",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2Q3W6jMBCFnya9KoaxDWwqWauEwLZdftqQNk1vLOIAIduGCHsFy9N3SlYen_OdkTwa-WjMRd_ZdvXR1Eejrb-a1K1p68KURLWfdtWh7Nv2T3Ou7aLp7GWWrMKY_nhcpMxBseEW_FvHtvCou93PcjCW7pS4afYlKbQSkP_HTniEhe8sSrbp1FKtEZxwJ-DLt6c82F2bnbinrvsaTukgkqAfsnGhk5Xm2Rhl2bhzsvG5fx7XwTZaLtNT7SebB7rO-yE5vUdxpJxNMLylYe9vxhf9feNNMsSrKF33M7bCmkaXCncjhPtzmHJbaMGvpIygzhUPRuT-7v7X6zXiwpSBO4VBAPWAEaBzD250-VEq07Tn3-U_4YWeCxZ-UnGm3AolZgBu4YdNjXhGA2CX5mIqpBlbYNXSIQ76ER3QCwnfs4Eh72WOquQL6kG6JQOFVMo5HChCJTlqI4HA9PQkH7Zoo3Tryt07X_Gk-8XjAQAA",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T22:15:00",
            "arrivalTime": "2024-01-29T00:25:00",
            "legs": [
                {
                "departureTime": "2024-01-28T22:15:00",
                "arrivalTime": "2024-01-29T00:25:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 651,
                    "planeType": "",
                    "carrierInfo": {
                    "operatingCarrier": "6E",
                    "marketingCarrier": "6E",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "6E",
                    "6E"
                ],
                "carriersData": [
                    {
                    "name": "IndiGo",
                    "code": "6E",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                    },
                    {
                    "name": "IndiGo",
                    "code": "6E",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": []
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "PIECE_BASED",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 33.1,
                    "massUnit": "LB"
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "PIECE_BASED",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 33.1,
                    "massUnit": "LB"
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 13.8,
                    "maxHeight": 9.8,
                    "sizeUnit": "INCH"
                    }
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 13.8,
                    "maxHeight": 9.8,
                    "sizeUnit": "INCH"
                    }
                }
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T22:15:00",
            "arrivalTime": "2024-01-31T00:25:00",
            "legs": [
                {
                "departureTime": "2024-01-30T22:15:00",
                "arrivalTime": "2024-01-31T00:25:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 6114,
                    "planeType": "",
                    "carrierInfo": {
                    "operatingCarrier": "6E",
                    "marketingCarrier": "6E",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "6E",
                    "6E"
                ],
                "carriersData": [
                    {
                    "name": "IndiGo",
                    "code": "6E",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                    },
                    {
                    "name": "IndiGo",
                    "code": "6E",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": []
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "PIECE_BASED",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 33.1,
                    "massUnit": "LB"
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "PIECE_BASED",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 33.1,
                    "massUnit": "LB"
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 13.8,
                    "maxHeight": 9.8,
                    "sizeUnit": "INCH"
                    }
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 13.8,
                    "maxHeight": 9.8,
                    "sizeUnit": "INCH"
                    }
                }
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 423,
            "nanos": 150000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 384,
            "nanos": 430000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 38,
            "nanos": 720000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 424
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 423,
            "nanos": 150000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 424
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "IndiGo",
                "code": "6E",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/6E.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 19,
                "nanos": 360000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 19,
                "nanos": 360000000
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 187,
                "nanos": 100000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 167,
                "nanos": 740000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 19,
                "nanos": 360000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 188
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 187,
                "nanos": 100000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 188
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 187,
                "nanos": 90000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 167,
                "nanos": 730000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 19,
                "nanos": 360000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 188
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 187,
                "nanos": 90000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 188
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 48,
                "nanos": 960000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 48,
                "nanos": 960000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 49
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 48,
                "nanos": 960000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 49
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 13.8,
                    "maxHeight": 9.8,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "PIECE_BASED",
                "maxPiece": 2,
                "maxWeightPerPiece": 33.1,
                "massUnit": "LB",
                "piecePerPax": 1
                }
            ]
            ]
        },
        "ancillaries": {},
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_6E651_2_6E6114",
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2Qb2-CMBDGP42-ktKWKmLSLCropoKbf1D3psFakI3JQrvo-PS7wNL2ud9zuWsudzXmW49sOy3y7Gq09aNRVpoyS4xCsvyy0wrkXJaf-S2zk7yyJ-vQD1Z0uBhHDgaxSY-4PWxbcOTo9KQextKV5N38rFCiJR_-U8UHyAnenVl4iJqULA1niOEpmxxfN_GkTVZ8HjvbzbFxFx5O7491Pdahr-_rOnCj3cmN_IkfBYvTPghoVGuzL150XG_C1UziHdStprgOt3fzhnHH8ZuPlJScIMRcjzS-TDR3WpKGU9zixfCte3qex62F8bDrtWUPTuiAOIhQb0C6WhVKmry8LdUv3y-9PrZgI8mNMmspwHueBctpfNyhU8LolaoCqOOM4WYCIxhtfIVIICaC4AWCB3wWW1Ap9qAXMWCpOwRSwiL9VAGlgoHmgiDS9H6IlwOEWgy9In2wP3HyllHQAQAA",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T21:55:00",
            "arrivalTime": "2024-01-29T00:10:00",
            "legs": [
                {
                "departureTime": "2024-01-28T21:55:00",
                "arrivalTime": "2024-01-29T00:10:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 950,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 8100,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 8100,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T21:55:00",
            "arrivalTime": "2024-01-31T00:15:00",
            "legs": [
                {
                "departureTime": "2024-01-30T21:55:00",
                "arrivalTime": "2024-01-31T00:15:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 999,
                    "planeType": "321",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 8400,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 8400,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 359,
            "nanos": 370000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 48,
            "nanos": 560000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 407,
            "nanos": 930000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 408
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
            ]
        },
        "travellerPrices": [
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 130000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 910000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "1",
            "travellerType": "ADULT"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 165,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 21,
                "nanos": 780000000
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 186,
                "nanos": 900000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 187
                }
            },
            "travellerReference": "2",
            "travellerType": "KID"
            },
            {
            "travellerPriceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 29,
                "nanos": 120000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 34,
                "nanos": 120000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 35
                }
            },
            "travellerReference": "3",
            "travellerType": "KID"
            }
        ],
        "priceDisplayRequirements": [],
        "pointOfSale": "us",
        "tripType": "ROUNDTRIP",
        "posMismatch": {
            "detectedPointOfSale": "us",
            "isPOSMismatch": false,
            "offerSalesCountry": "us"
        },
        "includedProducts": {
            "areAllSegmentsIdentical": true,
            "segments": [
            [
                {
                "luggageType": "PERSONAL_ITEM",
                "maxPiece": 2,
                "piecePerPax": 1
                },
                {
                "luggageType": "HAND",
                "maxPiece": 2,
                "maxWeightPerPiece": 15.4,
                "massUnit": "LB",
                "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                },
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 15.4,
                "massUnit": "LB",
                "maxPiece": 1,
                "piecePerPax": 1
                },
                {
                "luggageType": "CHECKED_IN",
                "ruleType": "WEIGHT_BASED",
                "maxTotalWeight": 33.1,
                "massUnit": "LB",
                "maxPiece": 2,
                "piecePerPax": 1
                }
            ]
            ]
        },
        "extraProducts": [
            {
            "type": "flexibleTicket",
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            }
            }
        ],
        "offerExtras": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "totalWithoutDiscountRounded": {
                "currencyCode": "USD",
                "nanos": 0,
                "units": 29
                }
            }
            }
        },
        "brandedFareInfo": {
            "fareName": "ECO STANDARD",
            "cabinClass": "ECONOMY",
            "features": [],
            "fareAttributes": [],
            "nonIncludedFeaturesRequired": false,
            "nonIncludedFeatures": []
        },
        "ancillaries": {
            "flexibleTicket": {
            "airProductReference": "n/a",
            "travellers": [
                "1",
                "2"
            ],
            "priceBreakdown": {
                "total": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "baseFare": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                },
                "fee": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "tax": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "moreTaxesAndFees": {},
                "discount": {
                "currencyCode": "USD",
                "units": 0,
                "nanos": 0
                },
                "totalWithoutDiscount": {
                "currencyCode": "USD",
                "units": 28,
                "nanos": 560000000
                }
            },
            "preSelected": false
            }
        },
        "appliedDiscounts": [],
        "offerKeyToHighlight": "1_UK950_2_UK999",
        "seatAvailability": {
            "numberOfSeatsAvailable": 2
        },
        "requestableBrandedFares": true,
        "extraProductDisplayRequirements": {}
        },
        {
        "token": "d7699_H4sIAAAAAAAA_y2Qa2-CMBSGf41-kkJbxsWkWVTQeQEX7-xLgwWRzVlDu8j49TtD0-Z9n_fknKY5Z61vqm-ap0tZnLUyfhQqpJZFqnMk5Ld5qkCOUn6V18JMy8ocLqMgXBBvNoipBWLiHnZ7lmnAEf3kNa-1oSrBuuUxR6kSzHtSxRxEww86jvZxWxJSMxvZ1sgeHt5Xu2exYpMdXa8ObcpYNLrXy2agokDdl03oxpvEjYNhEIezZBuGJG6U3l6matesosVYWBvoW4ysJlrf9SoQHRq0D-VCMIyQ7fq4zTJVjD5IaEasB2aard3kbbJ7RPiejSlpQ80wcTBFmPgO7qr8kgtdyus8_2Xbue85BmwkvRLbmHPIL64By2nzvkNG2PZlXdRAHTqAW3ALWeBncAyeckwISoaAR74GFXwLmnEnI0cPKOcGdrL_kRO3QUuOEW5HP_l0D9ZwT9y08P8AQ-2TqM8BAAA.",
        "segments": [
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-28T22:50:00",
            "arrivalTime": "2024-01-29T01:00:00",
            "legs": [
                {
                "departureTime": "2024-01-28T22:50:00",
                "arrivalTime": "2024-01-29T01:00:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 986,
                    "planeType": "321",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7800,
                "flightStops": [],
                "departureTerminal": "2",
                "arrivalTerminal": "3"
                }
            ],
            "totalTime": 7800,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            },
            {
            "departureAirport": {
                "type": "AIRPORT",
                "code": "DEL",
                "name": "Delhi",
                "city": "DEL",
                "cityName": "Delhi",
                "country": "IN",
                "countryName": "India"
            },
            "arrivalAirport": {
                "type": "AIRPORT",
                "code": "BOM",
                "name": "Mumbai",
                "city": "BOM",
                "cityName": "Mumbai",
                "country": "IN",
                "countryName": "India"
            },
            "departureTime": "2024-01-30T20:35:00",
            "arrivalTime": "2024-01-30T22:35:00",
            "legs": [
                {
                "departureTime": "2024-01-30T20:35:00",
                "arrivalTime": "2024-01-30T22:35:00",
                "departureAirport": {
                    "type": "AIRPORT",
                    "code": "DEL",
                    "name": "Delhi",
                    "city": "DEL",
                    "cityName": "Delhi",
                    "country": "IN",
                    "countryName": "India"
                },
                "arrivalAirport": {
                    "type": "AIRPORT",
                    "code": "BOM",
                    "name": "Mumbai",
                    "city": "BOM",
                    "cityName": "Mumbai",
                    "country": "IN",
                    "countryName": "India"
                },
                "cabinClass": "ECONOMY",
                "flightInfo": {
                    "facilities": [],
                    "flightNumber": 957,
                    "planeType": "320",
                    "carrierInfo": {
                    "operatingCarrier": "UK",
                    "marketingCarrier": "UK",
                    "operatingCarrierDisclosureText": ""
                    }
                },
                "carriers": [
                    "UK",
                    "UK"
                ],
                "carriersData": [
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    },
                    {
                    "name": "Vistara",
                    "code": "UK",
                    "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                    }
                ],
                "totalTime": 7200,
                "flightStops": [],
                "departureTerminal": "3",
                "arrivalTerminal": "2"
                }
            ],
            "totalTime": 7200,
            "travellerCheckedLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 33.1,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                },
                {
                "travellerReference": "3",
                "luggageAllowance": {
                    "luggageType": "CHECKED_IN",
                    "ruleType": "WEIGHT_BASED",
                    "maxTotalWeight": 15.4,
                    "massUnit": "LB",
                    "maxPiece": 1
                }
                }
            ],
            "travellerCabinLuggage": [
                {
                "travellerReference": "1",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                },
                {
                "travellerReference": "2",
                "luggageAllowance": {
                    "luggageType": "HAND",
                    "maxPiece": 1,
                    "maxWeightPerPiece": 15.4,
                    "massUnit": "LB",
                    "sizeRestrictions": {
                    "maxLength": 21.7,
                    "maxWidth": 15.8,
                    "maxHeight": 7.9,
                    "sizeUnit": "INCH"
                    }
                },
                "personalItem": true
                }
            ],
            "isAtolProtected": false,
            "showWarningDestinationAirport": false,
            "showWarningOriginAirport": false
            }
        ],
        "priceBreakdown": {
            "total": {
            "currencyCode": "USD",
            "units": 441,
            "nanos": 320000000
            },
            "baseFare": {
            "currencyCode": "USD",
            "units": 391,
            "nanos": 160000000
            },
            "fee": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "tax": {
            "currencyCode": "USD",
            "units": 50,
            "nanos": 160000000
            },
            "totalRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 442
            },
            "moreTaxesAndFees": {},
            "discount": {
            "currencyCode": "USD",
            "units": 0,
            "nanos": 0
            },
            "totalWithoutDiscount": {
            "currencyCode": "USD",
            "units": 441,
            "nanos": 320000000
            },
            "totalWithoutDiscountRounded": {
            "currencyCode": "USD",
            "nanos": 0,
            "units": 442
            },
            "carrierTaxBreakdown": [
            {
                "carrier": {
                "name": "Vistara",
                "code": "UK",
                "logo": "https://r-xx.bstatic.com/data/airlines_logo/UK.png"
                },
                "avgPerAdult": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 580000000
                },
                "avgPerChild": {
                "currencyCode": "USD",
                "units": 22,
                "nanos": 580000000
                },
                "avgPerInfant": {
                "currencyCode": "USD",
                "units": 5,
                "nanos": 0
                }
            }
                    ]
                },
                "travellerPrices": [
                    {
                    "travellerPriceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 203,
                        "nanos": 640000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 181,
                        "nanos": 60000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 22,
                        "nanos": 580000000
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 204
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 203,
                        "nanos": 640000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 204
                        }
                    },
                    "travellerReference": "1",
                    "travellerType": "ADULT"
                    },
                    {
                    "travellerPriceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 203,
                        "nanos": 630000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 181,
                        "nanos": 50000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 22,
                        "nanos": 580000000
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 204
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 203,
                        "nanos": 630000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 204
                        }
                    },
                    "travellerReference": "2",
                    "travellerType": "KID"
                    },
                    {
                    "travellerPriceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 34,
                        "nanos": 50000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 29,
                        "nanos": 50000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 5,
                        "nanos": 0
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 35
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 34,
                        "nanos": 50000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 35
                        }
                    },
                    "travellerReference": "3",
                    "travellerType": "KID"
                    }
                ],
                "priceDisplayRequirements": [],
                "pointOfSale": "us",
                "tripType": "ROUNDTRIP",
                "posMismatch": {
                    "detectedPointOfSale": "us",
                    "isPOSMismatch": false,
                    "offerSalesCountry": "us"
                },
                "includedProducts": {
                    "areAllSegmentsIdentical": true,
                    "segments": [
                    [
                        {
                        "luggageType": "PERSONAL_ITEM",
                        "maxPiece": 2,
                        "piecePerPax": 1
                        },
                        {
                        "luggageType": "HAND",
                        "maxPiece": 2,
                        "maxWeightPerPiece": 15.4,
                        "massUnit": "LB",
                        "sizeRestrictions": {
                            "maxLength": 21.7,
                            "maxWidth": 15.8,
                            "maxHeight": 7.9,
                            "sizeUnit": "INCH"
                        },
                        "piecePerPax": 1
                        },
                        {
                        "luggageType": "CHECKED_IN",
                        "ruleType": "WEIGHT_BASED",
                        "maxTotalWeight": 15.4,
                        "massUnit": "LB",
                        "maxPiece": 1,
                        "piecePerPax": 1
                        },
                        {
                        "luggageType": "CHECKED_IN",
                        "ruleType": "WEIGHT_BASED",
                        "maxTotalWeight": 33.1,
                        "massUnit": "LB",
                        "maxPiece": 2,
                        "piecePerPax": 1
                        }
                    ]
                    ]
                },
                "extraProducts": [
                    {
                    "type": "flexibleTicket",
                    "priceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 30,
                        "nanos": 890000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 30,
                        "nanos": 890000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 30,
                        "nanos": 890000000
                        }
                    }
                    }
                ],
                "offerExtras": {
                    "flexibleTicket": {
                    "airProductReference": "n/a",
                    "travellers": [
                        "1",
                        "2"
                    ],
                    "priceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 30,
                        "nanos": 890000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 30,
                        "nanos": 890000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 31
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 30,
                        "nanos": 890000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 31
                        }
                    }
                    }
                },
                "brandedFareInfo": {
                    "fareName": "ECO STANDARD",
                    "cabinClass": "ECONOMY",
                    "features": [],
                    "fareAttributes": [],
                    "nonIncludedFeaturesRequired": false,
                    "nonIncludedFeatures": []
                },
                "ancillaries": {
                    "flexibleTicket": {
                    "airProductReference": "n/a",
                    "travellers": [
                        "1",
                        "2"
                    ],
                    "priceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 30,
                        "nanos": 890000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 30,
                        "nanos": 890000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 30,
                        "nanos": 890000000
                        }
                    },
                    "preSelected": false
                    }
                },
                "appliedDiscounts": [],
                "offerKeyToHighlight": "1_UK986_2_UK957",
                "seatAvailability": {
                    "numberOfSeatsAvailable": 2
                },
                "requestableBrandedFares": true,
                "extraProductDisplayRequirements": {}
                }
            ],
            "flightDeals": [
                {
                "key": "CHEAPEST",
                "offerToken": "d7699_H4sIAAAAAAAA_y2QbU_CMBSFfw18Yl3blb2QNAbYQIUNBZnil2aUbkyRmbUG3K_3spk25zzn5ra5uUdjvvXItvNTWRyNtn40KipTFZlRSFZfdl6D7KvqszwXdlbW9mQVh9GS-o_jxMEgNhkQb4BtC44c7e7U1Vi6lrxf7hXKtOT-P9XcRU707szi16Qtycpwhhiessnb0zoNu2LN56mzWb-16cDj6eW6asY6DvVl1URe8rLzknASJtHjbhtFNGm02Z4edNqs4-VM4hfoW05xE28u5hnjntN9q6TkBCHmBaTNVaa505E0nOIOD4ZvvN39PO0ijIe9oGu7ckJd4iBCA5f0tTopacrqvFC_fLsIfNeCjWRnyqyFuGViwXLanPbolDDfHe6PQD1nDLcQGMFo4yM4Ac8EoRS9bwH3YgMqxY0PwmW55wMpYZFhroBywUBLQRBpn36Ih1ewRvjBKb-yP6PTnCPPAQAA",
                "price": {
                    "currencyCode": "USD",
                    "units": 407,
                    "nanos": 930000000
                },
                "travellerPrices": [
                    {
                    "travellerPriceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 186,
                        "nanos": 910000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 165,
                        "nanos": 130000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 21,
                        "nanos": 780000000
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 187
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 186,
                        "nanos": 910000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 187
                        }
                    },
                    "travellerReference": "1",
                    "travellerType": "ADULT"
                    },
                    {
                    "travellerPriceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 186,
                        "nanos": 900000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 165,
                        "nanos": 120000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 21,
                        "nanos": 780000000
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 187
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 186,
                        "nanos": 900000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 187
                        }
                    },
                    "travellerReference": "2",
                    "travellerType": "KID"
                    },
                    {
                    "travellerPriceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 34,
                        "nanos": 120000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 29,
                        "nanos": 120000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 5,
                        "nanos": 0
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 35
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 34,
                        "nanos": 120000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 35
                        }
                    },
                    "travellerReference": "3",
                    "travellerType": "KID"
                    }
                ]
                },
                {
                "key": "FASTEST",
                "offerToken": "d7699_H4sIAAAAAAAA_y1QW4-iMBT-Nc7TUGgpIJM0E64zusAsCjL60mCtiLqyS7sR_fVbcdPT75ac0-YcpPwt3nR9f26bgxTaXwGaTnZNLTlg3S993yvYdt2pvTR63fa6_5WGUYKmcy8zDQU6fIXOq6Fr6rC39TsfpCZ6Rl7aLQe1YAQW_2VPbGBGGzNOq2yMWCcJBtgIsP_9c2FZz7Ann3C1Md3R7UgaXIevuyfSQuAk9Jy0xCIrBMqC620VCiONUiM_H_K82PhJmF_z-yKoYt_PjjMnWc2XSRjdslOp-mdosRzW-Wktqmj-8ZhZ3MvxJkU6JGFclc3EDFWNT3Om_g4Adlw4-q4WBDpPySRB06fcSbJ01p8fq6eVxLJcjEYzEIhsaAKIXBu-CH7mTLbd5Qe_ETuCBtLUFusLwlpAvZntTDW10NFXExRA-AfbR67UxPRUNdQAhuKDYqi4ppsYxI9kS5cKGS0V7qjDawsrxanL-VSJPX3YlkIAx8YjnVWK7tSxd719-gdb_vrjAQIAAA..",
                "price": {
                    "currencyCode": "USD",
                    "units": 559,
                    "nanos": 420000000
                },
                "travellerPrices": [
                    {
                    "travellerPriceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 253,
                        "nanos": 300000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 229,
                        "nanos": 50000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 24,
                        "nanos": 250000000
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 254
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 253,
                        "nanos": 300000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 254
                        }
                    },
                    "travellerReference": "1",
                    "travellerType": "ADULT"
                    },
                    {
                    "travellerPriceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 253,
                        "nanos": 300000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 229,
                        "nanos": 50000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 24,
                        "nanos": 250000000
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 254
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 253,
                        "nanos": 300000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 254
                        }
                    },
                    "travellerReference": "2",
                    "travellerType": "KID"
                    },
                    {
                    "travellerPriceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 52,
                        "nanos": 820000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 49,
                        "nanos": 820000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 3,
                        "nanos": 0
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 53
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 52,
                        "nanos": 820000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 53
                        }
                    },
                    "travellerReference": "3",
                    "travellerType": "KID"
                    }
                ]
                },
                {
                "key": "BEST",
                "offerToken": "d7699_H4sIAAAAAAAA_y2QbU_CMBSFfw18Yl3blb2QNAbYQIUNBZnil2aUbkyRmbUG3K_3spk25zzn5ra5uUdjvvXItvNTWRyNtn40KipTFZlRSFZfdl6D7KvqszwXdlbW9mQVh9GS-o_jxMEgNhkQb4BtC44c7e7U1Vi6lrxf7hXKtOT-P9XcRU707szi16Qtycpwhhiessnb0zoNu2LN56mzWb-16cDj6eW6asY6DvVl1URe8rLzknASJtHjbhtFNGm02Z4edNqs4-VM4hfoW05xE28u5hnjntN9q6TkBCHmBaTNVaa505E0nOIOD4ZvvN39PO0ijIe9oGu7ckJd4iBCA5f0tTopacrqvFC_fLsIfNeCjWRnyqyFuGViwXLanPbolDDfHe6PQD1nDLcQGMFo4yM4Ac8EoRS9bwH3YgMqxY0PwmW55wMpYZFhroBywUBLQRBpn36Ih1ewRvjBKb-yP6PTnCPPAQAA",
                "price": {
                    "currencyCode": "USD",
                    "units": 407,
                    "nanos": 930000000
                },
                "travellerPrices": [
                    {
                    "travellerPriceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 186,
                        "nanos": 910000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 165,
                        "nanos": 130000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 21,
                        "nanos": 780000000
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 187
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 186,
                        "nanos": 910000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 187
                        }
                    },
                    "travellerReference": "1",
                    "travellerType": "ADULT"
                    },
                    {
                    "travellerPriceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 186,
                        "nanos": 900000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 165,
                        "nanos": 120000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 21,
                        "nanos": 780000000
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 187
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 186,
                        "nanos": 900000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 187
                        }
                    },
                    "travellerReference": "2",
                    "travellerType": "KID"
                    },
                    {
                    "travellerPriceBreakdown": {
                        "total": {
                        "currencyCode": "USD",
                        "units": 34,
                        "nanos": 120000000
                        },
                        "baseFare": {
                        "currencyCode": "USD",
                        "units": 29,
                        "nanos": 120000000
                        },
                        "fee": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "tax": {
                        "currencyCode": "USD",
                        "units": 5,
                        "nanos": 0
                        },
                        "totalRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 35
                        },
                        "moreTaxesAndFees": {},
                        "discount": {
                        "currencyCode": "USD",
                        "units": 0,
                        "nanos": 0
                        },
                        "totalWithoutDiscount": {
                        "currencyCode": "USD",
                        "units": 34,
                        "nanos": 120000000
                        },
                        "totalWithoutDiscountRounded": {
                        "currencyCode": "USD",
                        "nanos": 0,
                        "units": 35
                        }
                    },
                    "travellerReference": "3",
                    "travellerType": "KID"
                    }
                ]
                }
            ],
            "atolProtectedStatus": "NONE",
            "isOffersCabinClassExtended": false,
            "cabinClassExtension": {},
            "baggagePolicies": [
                {
                "code": "AI",
                "name": "Air India",
                "url": "http://www.airindia.in/baggage.htm"
                },
                {
                "code": "IX",
                "name": "Air India Express",
                "url": "https://www.airindiaexpress.in/en/excess-baggage"
                },
                {
                "code": "I5",
                "name": "Air India Express",
                "url": "https://www.airindiaexpress.in/en/excess-baggage"
                },
                {
                "code": "9I",
                "name": "Alliance Air",
                "url": "https://www.allianceair.in/book"
                },
                {
                "code": "6E",
                "name": "IndiGo",
                "url": "https://www.goindigo.in/baggage.html"
                },
                {
                "code": "UK",
                "name": "Vistara",
                "url": "https://www.airvistara.com/lk/en/vistara-experience/on-ground/baggage/lost-damaged-or-delayed-baggage"
                }
            ]
            }
        };

export default data;