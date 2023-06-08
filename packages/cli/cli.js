import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';  // 用于生成帮助信息
import prompts from 'prompts'; // 用于交互式命令行
import {readFile} from 'fs/promises';

// 使用Node.js中的fs模块读取当前文件夹下的package.json文件
// import.meta.url为当前文件的URL
const pkg = JSON.parse(
    await readFile(new URL('./package.json', import.meta.url))
);

const optionDefinitions = [
    {name: 'version',alias: 'v',type: Boolean},
    {name: 'help', alias: 'h', type: Boolean}
]
// 帮助命令
const helpSections = [
    {
        header: 'shine-cli',
        content: '一个快速生成组件库搭建环境的脚手架工具'
    },
    {
        header: 'Options',
        optionList: [
            {
                name: 'version',
                alias: 'v',
                description: '版本信息',
                typeLabel: '{underline Boolean}'
            },
            {
                name: 'help',
                alias: 'h',
                description: '帮助信息',
                typeLabel: '{underline Boolean}'
            }
        ]
    }
];
// 交互式命令行
const promptsOptions = [
    {
        type: 'text',
        name: 'projectName',
        message: '请输入项目名称'
    },
    {
        type: 'select',
        name: 'template',
        message: '请选择项目模板',
        choices: [
            {title: 'shine-ui', value: 0},
            {title: 'varlet', value: 1},
        ]
    }
]
const options = commandLineArgs(optionDefinitions);
if(options.version){
    console.log(`v${pkg.version}`);
}
if(options.help){
    const usage = commandLineUsage(helpSections);
    console.log(usage);
}
const getUserInfo = async () => {
    const response = await prompts(promptsOptions);
    console.log(response);
}
getUserInfo();