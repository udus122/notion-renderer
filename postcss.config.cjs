/* eslint-disable */
/** @type {import('postcss-load-config').Config} */
module.exports = (ctx) => {
  return {
    plugins: {
      autoprefixer: {},
      "postcss-import": {
        plugins: [
          // このタイミングでlinterを実行すると、エラー位置が結合前のファイルで示される
          require("stylelint")(),
        ],
      },
      "postcss-nesting": {},
    },
  };
};
