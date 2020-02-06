/**
 * Compatibility styles, using the color variables.
 *
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { setAllLinkColors } from "@library/styles/styleHelpers";
import { cssOut, nestedWorkaround, trimTrailingCommas } from "@dashboard/compatibilityStyles/index";

export const textLinkCSS = () => {
    // Various links
    mixinTextLink(".Navigation-linkContainer a");
    mixinTextLink(".Panel .PanelInThisDiscussion a");
    mixinTextLink(".Panel .Leaderboard a");
    mixinTextLink(".Panel .InThisConversation a");
    mixinTextLink(".FieldInfo a");

    mixinTextLink("div.Popup .Body a");
    mixinTextLink(".selectBox-toggle");
    mixinTextLink(".followButton");
    mixinTextLink(".SelectWrapper::after");
    mixinTextLink(".Back a");
    mixinTextLink(".OptionsLink-Clipboard");
    mixinTextLink("a.OptionsLink");
    mixinTextLink("a.MoreWrap, .MoreWrap a, .MorePager a, .more.More, .MoreWrap a.more.More");
    mixinTextLink(`body.Section-BestOf .Tile .Message a`);
    mixinTextLink(
        `
        .DataList .IdeationTag,
        .DataList .tag-tracker,
        .DataList .MItem.RoleTracker,
        .MessageList .IdeationTag,
        .MessageList .tag-tracker,
        .MessageList .MItem.RoleTracker,
        .DataTableWrap .IdeationTag,
        .DataTableWrap .tag-tracker,
        .DataTableWrap .MItem.RoleTracker
        `,
    );
    // Links that have FG color by default but regular state colors.
    mixinTextLink(".ItemContent a", true);
    mixinTextLink(".DataList .Item h3 a", true);
    mixinTextLink(".DataList .Item a.Title", true);
    mixinTextLink(".DataList .Item .Title a", true);
    mixinTextLink("a.Tag", true);
    mixinTextLink(".MenuItems a", true);

    mixinTextLink(".DataTable h2 a", true);
    mixinTextLink(".DataTable h3 a", true);
    mixinTextLink(".DataTable .Title.Title a", true);
    mixinTextLink(".Timebased.EndTime a", true);
    mixinTextLink(".FilterMenu a", true);
    mixinTextLink(".Breadcrumbs a", true, {
        textDecoration: "none",
    });
};

// Mixins replacement
export const mixinTextLink = (selector: string, skipDefaultColor = false, overwrite?: {}) => {
    const linkColors = setAllLinkColors();
    selector = trimTrailingCommas(selector);

    if (!skipDefaultColor) {
        cssOut(selector, {
            color: linkColors.color,
            ...overwrite,
        });
    }
    nestedWorkaround(selector, linkColors.nested);
};