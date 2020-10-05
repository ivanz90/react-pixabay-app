const schema = {
  inputs: [
    {
      id: 1,
      name: 'q',
      type: 'text',
      element: 'text-input',
      validators: {}
    },
    {
      id: 2,
      name: 'image_type',
      title: '',
      element: 'select',
      options: [
        { value: 'all', label: 'All' },
        { value: 'photo', label: 'Photo' },
        { value: 'illustration', label: 'Illustration' },
        { value: 'vector', label: 'Vector' }
      ],
      validators: {}
    },
    {
      id: 3,
      name: 'category',
      title: '',
      element: 'radio',
      options: [
        { id: 1, value: 'all', label: 'all' },
        { id: 2, value: 'backgrounds', label: 'backgrounds' },
        { id: 3, value: 'fashion', label: 'fashion' },
        { id: 4, value: 'nature', label: 'nature' },
        { id: 5, value: 'science', label: 'science' },
        { id: 6, value: 'education', label: 'education' },
        { id: 7, value: 'feelings', label: 'feelings' },
        { id: 8, value: 'health', label: 'health' },
        { id: 9, value: 'people', label: 'people' },
        { id: 10, value: 'religion', label: 'religion' },
        { id: 11, value: 'places', label: 'places' },
        { id: 12, value: 'animals', label: 'animals' },
        { id: 13, value: 'industry', label: 'industry' },
        { id: 14, value: 'computer', label: 'computer' },
        { id: 15, value: 'food', label: 'food' },
        { id: 16, value: 'sports', label: 'sports' },
        { id: 17, value: 'transportation', label: 'transportation' },
        { id: 18, value: 'travel', label: 'travel' },
        { id: 19, value: 'buildings', label: 'buildings' },
        { id: 20, value: 'business', label: 'business' },
        { id: 21, value: 'music', label: 'music' }
      ],
      validators: {}
    }
  ],
  buttons: [
    {
      id: 1,
      type: 'submit',
      code: 'submit',
      title: 'Search'
    }
  ]
}

export default schema