module.exports = function (plop) {
  // create your generators here
  plop.setGenerator('component', {
      description: 'creat component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: '组件名称'
        },
        {
          type: 'input',
          name: 'isContainer',
          message: '是 Container 吗？(y/n)',
        }
      ],
      actions: data => {
        const folder = data.isContainer === 'y' ? 'container' : 'issue'
        const actions = [
          {
            type: 'add',
            path: `src/components/${folder}/{{name}}/index.tsx`,
            templateFile: 'plop-templates/component.hbs'
          },
          {
            type: 'add',
            path: `src/components/${folder}/{{name}}/style.scss`,
            templateFile: 'plop-templates/style.hbs'
          }
        ]
        return actions
      }
  });
}
