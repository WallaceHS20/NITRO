FROM php:8.3-alpine

# Copia o arquivo index.php para o diretório de trabalho do contêiner
COPY ./index.php /var/www/html/

# Define a porta que o contêiner vai expor
EXPOSE 8080

# Define o diretório de trabalho dentro do contêiner
WORKDIR /var/www/html

# Define a variável de ambiente API_KEY
ENV API_KEY ECA1AB4CE8583613A2C759B445E98

# Comando para iniciar o servidor PHP embutido
CMD ["php", "-S", "0.0.0.0:8080"]
