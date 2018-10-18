#!/usr/bin/env node

/**
 * @license MIT
 * @version 1.1.0
 * @author M.A.R.S. Labs
 */


const shell = require("shelljs");
const exec = shell.exec;
const path = require("path");
const fs = require("fs-extra");
const colors = require("colors");
const params = require("yargs").argv;
const deployEnvironment = params.env || process.env.npm_config_env || process.env.env || "dev";
const remote = `https://git.heroku.com/momentum-${deployEnvironment}-landing.git`;
const gitPath = path.resolve(__dirname, "../../.git");

const build = async () => {
	// console.log((`♂ Mars Landing Page: Building...`.yellow));
	// await exec("npm run build");
	// Use this for commit based deploys
	console.log((`♂ Mars Landing Page: Generating commit...`.yellow));
	const commitMsg = "update(landing-page): Updates landing page.";
	await exec("git init");
	await exec("git add .");
	await exec(`git commit -m "${commitMsg}"`);
	await exec(`git push ${remote} master -f`);
	await fs.remove(gitPath);
	console.log((`♂ Mars Landing Page: build deployed successfully!`.green));
	process.exit();
};

build();

