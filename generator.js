const getFeatureCommand = (featureName, importName, directory) => {
	return `npx nx generate @nrwl/react:library ${featureName} --style=none --directory=${directory} --no-component --importPath=@toover/${importName} --unitTestRunner=none --no-interactive`;
};

const toGenerate = [
	{ featureName: 'redux-toolkit', importName: 'redux-toolkit', directory: 'libs' },
];

const scripts = toGenerate.map(({ featureName, importName, directory }) => {
	return getFeatureCommand(featureName, importName, directory);
});

const { execSync } = require('child_process');
for (const toGElement of scripts) {
	execSync(toGElement, { stdio: 'inherit' });
}
