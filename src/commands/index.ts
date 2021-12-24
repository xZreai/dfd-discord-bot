import Discord from 'discord.js';
import { when } from './a350x/when';
import { marketplace } from './a350x/marketplace';
import { faq } from './a350x/faq';
import { help } from './general/help';
import { info } from './moderation/info';
import { rules } from './moderation/rules';
import { purge } from './moderation/purge';
import { ban } from './moderation/ban';
import { kick } from './moderation/kick';
import { dm } from './moderation/dm';
import { whois } from './moderation/whois';

export const enum CommandCategories {
    A350X = 'A350X',
    GENERAL = 'General',
    MODERATION = 'Moderation',
}
export type CommandDefinition = {
    names: string[];
    description: string;
    category: CommandCategories;
    permissions?: Discord.PermissionString[];
    execute: Function;
};

export const commands: CommandDefinition[] = [when, marketplace, faq, help, info, rules, purge, ban, kick, dm, whois];
