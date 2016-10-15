toDigitsRev :: Int -> [Int]
toDigitsRev n 
    |n<=0 = []
    |otherwise = [(n `mod` 10)]++toDigitsRev(div n 10)

toDigits :: Int -> [Int]
toDigits n = reverse (toDigitsRev n)

intListLength :: [Int] -> Int   
intListLength [] = 0                                                
intListLength (x:xs) = 1 + intListLength xs

doubleEveryOther :: [Int]->[Int]
doubleEveryOther [] = []
doubleEveryOther n
    |(intListLength n `mod` 2) == 0 = pair n
    |otherwise                      = nonpair n

pair :: [Int]->[Int]
pair []         = []
pair (x:xs:r)   = x * 2 : xs : doubleEveryOther r

nonpair :: [Int]->[Int]
nonpair (x:[])      = x:[]
nonpair (x:xs:r)    = x: xs * 2 : doubleEveryOther r

sumDigits :: [Int]->Int
sumDigits []    = 0
sumDigits (x:r) = sumNumber x + sumDigits r

sumNumber :: Int->Int
sumNumber n
    |n<10   =n
    |otherwise  = n `div` 10 + n `mod` 10

validate :: Int -> Bool
validate n
    |(sumDigits (doubleEveryOther (toDigits n))) `mod` 10 == 0 = True
    |otherwise = False