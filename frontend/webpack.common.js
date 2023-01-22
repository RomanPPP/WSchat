module.exports = {
  
  module: {
    rules: [
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/, // исключаем из обработки папку node_modules
        loader: "babel-loader", // определяем загрузчик
        options: {
          presets: ["@babel/preset-react"], // используемые плагины
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
    
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  }

};
