module.exports = {
  name: 'todo-s',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/todo-s',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
