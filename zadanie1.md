# zadanie1
Aby zbudować obraz należy użyć polecenia
```
docker build -f Dockerfile1 -t <nazwaobrazu>
```
Uruchamiamy kontener za pomocą polecenia 
```
docker run -p 8080:8080 <nazwaobrazu>
```
W konsoli pojawią się informacje związane z kontenerem 
![image](https://github.com/patryczeko/zadanie1/assets/106553021/7d4304f2-96e9-49ae-a42a-48204e5385f2)

Aby uzyskać informacje z serwera trzeba wpisać w przeglądarkę adres: 
```
localhost:8080
```

Efekt uruchomienia serwera w przeglądarce
![image](https://github.com/patryczeko/zadanie1/assets/106553021/c9670ac8-5369-4182-b88e-b7ea09cd670b)


Aby sprawdzić liczbę warstw obrazu możemy użyć polecenia
```
docker history <nazwaobrazu>
```

Żadne ze składowych obrazu nie posiadają oceny CVSS w zakresie High lub Critical
![image](https://github.com/patryczeko/zadanie1/assets/106553021/e455b076-183f-4847-8efe-f3893cdf2eef)

