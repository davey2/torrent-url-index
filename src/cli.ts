#!/usr/bin/env node

import commander, { Command, OptionValues } from "commander";
import TorrentURLIndex from "./index";

const program: commander.Command = new Command();

program.option("-p, --port [number]", "port to listen on", "8000");

program.parse(process.argv);

const options: OptionValues = program.opts();

new TorrentURLIndex(options.port);
