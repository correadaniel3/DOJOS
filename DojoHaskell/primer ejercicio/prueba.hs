x::Int 
x=5

lucky :: (Integral a) => a -> String
lucky 7 = "Hoy es tu dia de suerte"
lucky x = "Hoy no es tu dia de suerte" 

factorial :: Integer => Integer
factorial 0 = 1
factorial x = x * factorial(x - 1)

sumatoria :: Integer  => Integer
sumatoria 0 = 0
sumatoria x = x + sumatoria(x-1)

sumEveryTwo :: [Integer] -> [Integer]
sumEveryTwo [] = []
sumEveryTwo (x: []) = [x]
sumEveryTwo (x:y:zs) = (x+y):sumEveryTwo zs

intListLength :: [Int] -> Int
intListLength [] = 0
intListLength (x:zs)= 1 + intListLength zs 

duplicarNumero :: (Num a, Ord a) => a -> a
duplicarNumero x = if x<100
	then x * 2
	else x

pesoTest :: Int -> [Char]
pesoTest peso
	|peso<=40 = "Estas muy flaco"
	|peso<=60 = "Estas bien de peso"
	|peso<=80 = "Estas gordo"
	|otherwise = "Estas super gordo"

mayor :: Int->Int->Int
mayor x y
	|y>x =y
	|otherwise = x

duplicarPares xs=[x*2| x<-xs,(mod x 2)==0]

multiplosTres xs=[x| x<-xs,(mod x 3)==0]