module.exports = {
  name: 'app06',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/app06',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
