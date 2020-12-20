module.exports = {
  stories: ['../docs/**/shj*.stories.mdx', '../src/**/shj*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-storysource',
  ],
};
